import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import skillsRoutes from './routes/skillsRoutes.js';
import projectsRoutes from './routes/projectsRoutes.js';
import homeRoutes from './routes/homeRoutes.js';
import educationRoutes from './routes/educationRoutes.js';
import experienceRoutes from './routes/experienceRoutes.js';
import { notFound } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(helmet());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') || '*' }));

app.get('/health', (req, res) => res.json({ ok: true }));

app.use('/api/skills', skillsRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/experience', experienceRoutes);


app.use(notFound);
app.use(errorHandler);


export default app;
