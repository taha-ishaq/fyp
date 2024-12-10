import Session from "../models/session.schema.js";
import User from "../models/user.model.js";

export const createSession = async (req, res) => {
  try {
    const { title, description, members } = req.body;

    const existingSession = await Session.findOne({ title });
    if (existingSession) {
      return res.status(400).json({ error: "Session with this title already exists" });
    }
    const validMembers = [];
    if (members && members.length > 0) {
      for (const username of members) {
        const user = await User.findOne({ username });
        if (user) {
          validMembers.push(user._id);
        } else {
          return res.status(400).json({ error: `User with username ${username} not found` });
        }
      }
    }

    
    const newSession = new Session({
      title,
      description,
    createdBy: req.user._id, 
      members: [...validMembers, req.user._id],
    });

    await newSession.save();
    return res.status(201).json({ message: "Session created successfully", session: newSession });
  } catch (error) {
    console.error("Error in createSession:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ members: req.user._id }) 
      .populate("members", "username email")
      .populate("createdBy", "username email");

    return res.status(200).json({ sessions });
  } catch (error) {
    console.error("Error in getAllSessions:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const joinSession = async (req, res) => {
  try {
    const { sessionId } = req.params;

    const session = await Session.findById(sessionId);
    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    // Check if the user is already a member
    if (session.members.includes(req.user._id)) {
      return res.status(400).json({ error: "You are already a member of this session" });
    }

    session.members.push(req.user._id);
    await session.save();

    return res.status(200).json({ message: "Successfully joined the session", session });
  } catch (error) {
    console.error("Error in joinSession:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
