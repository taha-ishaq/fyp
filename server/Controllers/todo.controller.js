import Todo from '../models/todo.schema.js';
import User from '../models/user.model.js'; 

export const createTodo = async (req, res) => {
  try {
    const { description, tasks, startDate, endDate } = req.body;

    const user = await User.findById(req.user._id); 
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized user' });
    }
    if (user.role !== 'teacher' && user.role !== 'CR') {
      return res.status(403).json({ error: 'Only teachers or CRs can create a to-do' });
    }
    const newTodo = new Todo({
      description,
      tasks,
      startDate,
      endDate,
      createdBy: user._id,
    });

    await newTodo.save();
    return res.status(201).json(newTodo);
  } catch (error) {
    console.error('Error creating to-do:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


export const markTaskComplete = async (req, res) => {
    const { todoId, taskId } = req.body;
    try {
      const todo = await Todo.findById(todoId);
  
      if (!todo) {
        return res.status(404).json({ error: 'To-do not found' });
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
    try {
      const todos = await Todo.find(); 
      return res.status(200).json(todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };


export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
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
