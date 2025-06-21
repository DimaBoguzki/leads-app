import mongoose, { Schema, Document } from 'mongoose';

export interface ILead extends Document {
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  area: string[];
  type: string[];
  number_rooms: string[];
  priority: string[];
  max_budget: number;
  other?: string;
}

const LeadSchema: Schema = new Schema( {
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  area: { type: [ String ] },
  type: { type: [ String ] },
  number_rooms: { type: [ String ] },
  priority: { type: [ String ] },
  max_budget: { type: Number },
  other: { type: String }
}, { timestamps: true } );

export default mongoose.model<ILead>( 'Leads', LeadSchema );