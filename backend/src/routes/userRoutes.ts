import { Router } from 'express';
import { login, register, createUser } from '../controllers/userController';

const router = Router();

router.post('/login', login);
router.post('/users', createUser); // For seeding test users
router.post('/register', register);

export default router;