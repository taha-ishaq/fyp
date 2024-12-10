    import express from 'express';
    import { createTodo, getAllTodos, deleteTodo, markTaskComplete } from '../Controllers/todo.controller.js';
    import { protectRoute } from '../middleware/protectRoute.js';

    const router = express.Router();

router.post('/:sessionId/todos', protectRoute, createTodo);


router.put('/:sessionId/todos/markComplete', protectRoute, markTaskComplete);

router.get('/:sessionId/todos', protectRoute, getAllTodos);


router.delete('/:sessionId/todos/:id', protectRoute, deleteTodo);
    export default router;
