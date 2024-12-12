import SemesterGoal from "../models/goal.schema.js";
import Session from "../models/session.schema.js";

export const createSemesterGoal = async (req, res) => {
  try {
    const { sessionId } = req.params; // Get session ID from URL
    const { title, description, milestones } = req.body;

    // Find the session to ensure it exists
    const session = await Session.findById(sessionId);
    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    // Create a new semester goal
    const newGoal = new SemesterGoal({
      title,
      description,
      milestones,
      session: sessionId,
      createdBy: req.user._id, // Assuming user authentication middleware provides req.user
    });

    // Save the new goal
    await newGoal.save();

    // Add the goal to the session's semesterGoals array
    session.semesterGoals.push(newGoal._id);
    await session.save();

    return res.status(201).json({ message: "Semester goal created successfully", goal: newGoal });
  } catch (error) {
    console.error("Error creating semester goal:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const getSemesterGoalsBySession = async (req, res) => {
    try {
      const { sessionId } = req.params; // Get session ID from URL
  
      // Populate semester goals for the session
      const session = await Session.findById(sessionId)
        .populate({
          path: "semesterGoals",
          populate: {
            path: "createdBy",
            select: "username email",
          },
        })
        .populate("createdBy", "username email");
  
      if (!session) {
        return res.status(404).json({ error: "Session not found" });
      }
  
      return res.status(200).json({ semesterGoals: session.semesterGoals });
    } catch (error) {
      console.error("Error fetching semester goals:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
  export const updateMilestone = async (req, res) => {
    try {
      const { goalId, milestoneIndex } = req.params;
      const { isComplete } = req.body;
  
      // Find the semester goal
      const goal = await SemesterGoal.findById(goalId);
  
      if (!goal) {
        return res.status(404).json({ error: "Goal not found" });
      }
  
      // Update the milestone's completion status
      if (goal.milestones[milestoneIndex]) {
        goal.milestones[milestoneIndex].isComplete = isComplete;
      } else {
        return res.status(404).json({ error: "Milestone not found" });
      }
  
      // Save the updated goal
      await goal.save();
  
      return res.status(200).json({ message: "Milestone updated successfully", goal });
    } catch (error) {
      console.error("Error updating milestone:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };