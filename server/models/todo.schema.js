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

const Task = new mongoose.model("Tasks", taskSchema);


const todoSchema = new mongoose.Schema({
    description: {
      type: String,
      required: true,
    },
    tasks: [taskSchema], 
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['isCompleted', 'inProgress', 'notStarted'],
      default: 'notStarted',
    },
    session: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Session',  
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',  
      required: true,
    },
  });
  
  const Todo = mongoose.model('Todo', todoSchema);
  
  export default Todo;