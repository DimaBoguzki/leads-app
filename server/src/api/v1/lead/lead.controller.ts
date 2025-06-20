import { Request, Response } from 'express';
import { leadSchema } from './lead.schema';
import { createLead, getLeads } from './lead.handler';

export const handleCreateLead = async (req: Request, res: Response) => {
  try {
    const parsed = leadSchema.parse(req.body);
    const lead = await createLead(parsed);
    res.status(201).json(lead);
  } catch (err: any) {
    res.status(400).json({ error: err.message || 'Validation error' });
  }
};

export const handleGetLeads = async (req: Request, res: Response) => {
  const leads = await getLeads();
  res.json(leads);
};