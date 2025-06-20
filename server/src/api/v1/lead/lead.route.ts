import express from 'express';
import { handleCreateLead, handleGetLeads } from './lead.controller';

const router = express.Router();

router.get('/', handleGetLeads);
router.post('/', handleCreateLead);

export default router;