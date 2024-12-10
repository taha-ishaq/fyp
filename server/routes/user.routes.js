import express from 'express';
import { getAllUsers, loginUser, registerUser } from '../Controllers/user.controller.js';

 const router = express.Router();


router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/getUsers',getAllUsers)

export default router