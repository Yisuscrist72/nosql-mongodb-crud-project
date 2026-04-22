import { Router } from 'express';
import { ContactModel } from '../models/Contact.js';
import { contactFormSchema } from '../schemas/contactSchema.js';

const router = Router();

// CREATE: Guardar nuevo contacto
router.post('/', async (req, res) => {
  try {
    const validatedData = contactFormSchema.parse(req.body);
    // Solo guardamos los campos que nos interesan (sin honeypot)
    const { name, email, subject, message } = validatedData;
    const newContact = await ContactModel.create({ name, email, subject, message } as any);
    res.status(201).json(newContact);
  } catch (error: any) {
    res.status(400).json({ error: 'Validación fallida', details: error.errors });
  }
});

// READ: Ver todos los mensajes de contacto
router.get('/', async (req, res) => {
  const contacts = await ContactModel.find().sort({ createdAt: -1 });
  res.json(contacts);
});

// DELETE: Borrar un mensaje (opcional, para gestión)
router.delete('/:id', async (req, res) => {
  await ContactModel.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;