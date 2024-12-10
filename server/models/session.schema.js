import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true, 
  },
  description: {
    type: String,
    required: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true, 
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  ],
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Session = mongoose.model("Session", sessionSchema);

export default Session;
