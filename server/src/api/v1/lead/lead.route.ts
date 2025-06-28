import express from 'express';
import { handleCreateLead } from './lead.controller';

const router = express.Router();

// router.get( '/', handleGetLeads );
router.post( '/', handleCreateLead );

export default router;