import { z } from 'zod';

const baseContactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(100),
  message: z.string().min(10).max(1000),
  accept_terms: z.boolean().refine((val) => val === true),
  website: z.string().optional(), // Honeypot
  formStartTime: z.number().nullish(),
});

export const contactFormSchema = baseContactFormSchema.extend({
  subject: z.string().optional().or(z.literal(''))
    .refine((val) => !val || val.length >= 2)
    .refine((val) => !val || val.length <= 40),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;