import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import storyRoutes from './routes/storyRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.use('/api/stories', storyRoutes);
app.use('/api/contacts', contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));