import { z } from 'zod';

export const storyFormSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  story: z.string().min(10).max(2000),
  accept_terms: z.boolean().refine((val) => val === true),
  website: z.string().optional(), 
  formStartTime: z.number().nullish(),
});

export type StoryFormData = z.infer<typeof storyFormSchema>;