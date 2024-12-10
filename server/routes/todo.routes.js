import express from 'express';
import { createTodo, getAllTodos, deleteTodo } from '../Controllers/todo.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/create', protectRoute, createTodo);

router.get('/', protectRoute, getAllTodos);

router.delete('/:id', protectRoute, deleteTodo);

export default router;
