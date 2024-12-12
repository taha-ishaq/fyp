import express from "express";
import {
  createSemesterGoal,
  getSemesterGoalsBySession,
  updateMilestone,
} from "../Controllers/goal.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

// Route to create a semester goal in a session
router.post("/:sessionId/goals",protectRoute, createSemesterGoal);

// Route to fetch all semester goals in a session
router.get("/:sessionId/goals", getSemesterGoalsBySession);

// Route to update a milestone in a goal
router.put("/goals/:goalId/milestones/:milestoneIndex", updateMilestone);

export default router;
