import Lead from './lead.model';
import { LeadInput } from './lead.schema';

const createLead = async ( input: LeadInput ) => {
  try {
    const lead = await Lead.create( input );
    console.log( lead );

    return lead;
  }
  catch ( error ) {
    console.error( 'Error creating lead:', error );
    throw new Error( 'Failed to create lead' );
  }
};

const getLeads = async () => {
  return await Lead.find( {} );
};

export {
  createLead,
  getLeads
}
