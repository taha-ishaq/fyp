import mongoose from 'mongoose';
import taskSchema from './task.schema.js'



const todoSchema = new mongoose.Schema(
    {
      description: {
        type: String,
        required: true,
      },
      tasks: [taskSchema],
      completedCount: {
        type: Number,
        default: 0,
      },
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    },
    {
      timestamps: true, 
    }
  );
  
  const Todo = mongoose.model('Todo', todoSchema);
  
  export default Todo;