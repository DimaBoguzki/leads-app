import { z } from 'zod';

export const leadSchema = z.object({
  fullName: z.string().min(1),
  lastName: z.string().min(1),
  phone: z.string().min(5),
  city: z.string(),
  area: z.array(z.string()),
  type: z.array(z.string()),
  number_rooms: z.array(z.string()),
  priority: z.array(z.string()),
  max_budget: z.number(),
  other: z.string().optional()
});

export type LeadInput = z.infer<typeof leadSchema>;