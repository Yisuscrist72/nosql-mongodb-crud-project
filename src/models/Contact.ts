import { Schema, model, Document } from 'mongoose';

// Definimos la interfaz para que TypeScript sepa qué campos esperar
interface IContact extends Document {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

const contactSchema = new Schema<IContact>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: false }, // Asegúrate de que no sea 'required' si es opcional
  message: { type: String, required: true },
}, { 
  timestamps: true 
});

export const ContactModel = model<IContact>('Contact', contactSchema);