import { Request, Response } from 'express';
import { leadSchema } from './lead.schema';
import { createLead, getLeads } from './lead.handler';
import { LeadMails } from './lead.mails';

export const handleCreateLead = async ( req: Request, res: Response ) => {
  try {
    const parsed = leadSchema.parse( req.body );
    const lead = await createLead( parsed );
    const service = new LeadMails( lead, 'fromLEad' );
    const res1 = await service.send( 'emilyakoeli86@gmail.com' );
    const res2 = await service.send( 'dimaboguzki@gmail.com' );
    console.log( '@@@@@@@@@@@@@@@@@@@' );

    console.log( res1, 'res1' );
    console.log( res2, 'res2' );

    res.status( 201 ).json( lead );
  } catch ( err: any ) {
    res.status( 400 ).json( { error: err.message || 'Validation error' } );
  }
};

export const handleGetLeads = async ( req: Request, res: Response ) => {
  const leads = await getLeads();
  res.json( leads );
};