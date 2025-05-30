import express from 'express';
import { register, login, getCurrentUser, updateProfile, logout } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';
import { check } from 'express-validator';

const router = express.Router();

router.post('/register', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], register);

router.post('/login', [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists()
], login);

router.get('/me', protect, getCurrentUser);
router.put('/profile', protect, updateProfile);
router.post('/logout', protect, logout);

export default router;