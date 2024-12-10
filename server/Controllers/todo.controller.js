import Todo from '../models/todo.schema.js';
import User from '../models/user.model.js'; 
import Session from '../models/session.schema.js';



export const createTodo = async (req, res) => {
    try {
      const { sessionId } = req.params;
  
      const session = await Session.findById(sessionId);
      if (!session) {
        return res.status(404).json({ error: 'Session not found' });
      }
      const newTodo = new Todo({
        description: req.body.description,
        tasks: req.body.tasks,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        session: sessionId,
        createdBy: req.user._id,
      });
  
      await newTodo.save();
  
      session.todos.push(newTodo._id);
      await session.save();
  
      return res.status(201).json({ todo: newTodo });
    } catch (error) {
      console.error("Error creating todo:", error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  export const markTaskComplete = async (req, res) => {
    const { sessionId, todoId, taskId } = req.body;
    try {
      
      const session = await Session.findById(sessionId);
      if (!session) {
        return res.status(404).json({ error: 'Session not found' });
      }
  
     
      const todo = await Todo.findOne({ _id: todoId, session: sessionId });
      if (!todo) {
        return res.status(404).json({ error: 'To-do not found in this session' });
      }
  
      const task = todo.tasks.id(taskId);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
  
      if (task.status === 'isCompleted') {
        return res.status(400).json({ error: 'Task already completed' });
      }
  
      task.status = 'isCompleted';
      todo.completedCount += 1;
  
      await todo.save();
      return res.status(200).json(todo);
    } catch (error) {
      console.error('Error marking task as complete:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  
  export const getAllTodos = async (req, res) => {
    const { sessionId } = req.params; 
    try {
      
      const session = await Session.findById(sessionId);
      if (!session) {
        return res.status(404).json({ error: 'Session not found' });
      }
  
     
      const todos = await Todo.find({ session: sessionId });
      return res.status(200).json(todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  


  export const deleteTodo = async (req, res) => {
    const { sessionId, id } = req.params;  
    try {
     
      const session = await Session.findById(sessionId);
      if (!session) {
        return res.status(404).json({ error: 'Session not found' });
      }
  
      
      const todo = await Todo.findOne({ _id: id, session: sessionId });
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found in this session' });
      }
  
      
      if (todo.createdBy.toString() !== req.user._id.toString()) {
        return res.status(403).json({ error: 'You are not authorized to delete this todo' });
      }
  
      await todo.remove();
      return res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
      console.error('Error deleting todo:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  