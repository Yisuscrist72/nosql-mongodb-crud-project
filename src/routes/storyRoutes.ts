import { Router } from 'express';
import { StoryModel } from '../models/Story.js';
import { storyFormSchema } from '../schemas/storySchema.js';

const router = Router();

// CREATE: Inserción
router.post('/', async (req, res) => {
  try {
    const validatedData = storyFormSchema.parse(req.body); // Validación Zod
    const newStory = await StoryModel.create(validatedData);
    res.status(201).json(newStory);
  } catch (error: any) {
    res.status(400).json({ error: 'Datos no válidos', details: error.errors });
  }
});

// READ: Consulta (Gestión de datos: ordenados por fecha)
router.get('/', async (req, res) => {
  const stories = await StoryModel.find().sort({ createdAt: -1 });
  res.json(stories);
});

// UPDATE: Actualización
router.put('/:id', async (req, res) => {
  const updated = await StoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE: Eliminación
router.delete('/:id', async (req, res) => {
  await StoryModel.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;