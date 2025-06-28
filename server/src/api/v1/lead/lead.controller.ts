import { Request, Response } from 'express';
import { leadSchema } from './lead.schema';
import { createLead, getLeads } from './lead.handler';
import { LeadMails } from './lead.mails';


export const handleCreateLead = async ( req: Request, res: Response ) => {
  try {
    const parsed = leadSchema.parse( req.body );
    const lead = await createLead( parsed );
    const service = new LeadMails( lead, 'fromLEad' );
    const sendTo = process?.env?.NODE_ENV ? 'dimaboguzki@gmail.com' : parsed.creator;
    const res1 = await service.send( sendTo );
    console.log( res1, 'res1' );

    res.status( 201 ).json( lead );
  } catch ( err: any ) {
    res.status( 400 ).json( { error: err.message || 'Validation error' } );
  }
};

export const handleGetLeads = async ( req: Request, res: Response ) => {
  const leads = await getLeads();
  res.json( leads );
};