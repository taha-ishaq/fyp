import mongoose from "mongoose";

// Milestone schema
const milestoneSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
});

// Semester Goal schema
const semesterGoalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  milestones: [milestoneSchema], // Embedding milestones
  session: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Session", // Reference to the Session model
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
});

// Middleware to automatically update `isComplete` when all milestones are complete
semesterGoalSchema.pre("save", function (next) {
  this.isComplete = this.milestones.every((milestone) => milestone.isComplete);
  next();
});

const SemesterGoal = mongoose.model("SemesterGoal", semesterGoalSchema);

export default SemesterGoal;
