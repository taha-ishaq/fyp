import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import { createSession, getAllSessions, joinSession } from '../Controllers/session.controller.js';

const router = express.Router();

router.post('/create', protectRoute, createSession);

router.get('/', protectRoute, getAllSessions);

router.post('/:sessionId/join', protectRoute, joinSession);

export default router;
