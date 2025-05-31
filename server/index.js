import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

// Route imports
import authRoutes from './routes/auth.js';
// import userRoutes from './routes/users.js';
// import courseRoutes from './routes/courses.js';
// import lessonRoutes from './routes/lessons.js';
// import communityRoutes from './routes/community.js';
// import certificationRoutes from './routes/certifications.js';

// Middleware imports
import { errorHandler } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFound.js';

const MONGODB_URL = 'mongodb+srv://shiv1540:ZRihWK3BviV8Ddgu@fullstack.a4js1.mongodb.net/harmonia'

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(cookieParser());
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/courses', courseRoutes);
// app.use('/api/lessons', lessonRoutes);
// app.use('/api/community', communityRoutes);
// app.use('/api/certifications', certificationRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

// Database connection
mongoose.connect(MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;