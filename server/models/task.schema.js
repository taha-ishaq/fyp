import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['isCompleted', 'inProgress', 'notStarted'],
    default: 'notStarted',
  },
});

export default taskSchema;
