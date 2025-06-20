import Lead from './lead.model';
import { LeadInput } from './lead.schema';

const createLead = async (input: LeadInput) => {
  const lead = new Lead(input);
  return await lead.save();
};

const getLeads = async () => {
  return await Lead.find({});
};

export {
  createLead,
  getLeads
}
