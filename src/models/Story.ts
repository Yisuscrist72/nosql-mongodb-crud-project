import { Schema, model } from 'mongoose';

// Definimos la estructura en la base de datos (NoSQL es flexible)
const storySchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  story: { type: String, required: true },
}, { 
  timestamps: true // Esto gestiona automáticamente fechas de creación/actualización
});

export const StoryModel = model('Story', storySchema);