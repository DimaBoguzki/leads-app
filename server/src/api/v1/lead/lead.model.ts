import mongoose, { Schema, Document } from 'mongoose';

export interface ILead extends Document {
  fullName: string;
  lastName: string;
  phone: string;
  city: string;
  area: string[];
  type: string[];
  number_rooms: number[];
  priority: string[];
  max_budget: number;
  other?: string;
}

const LeadSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  area: { type: [String], required: true },
  type: { type: [String], required: true },
  number_rooms: { type: [String], required: true },
  priority: { type: [String], required: true },
  max_budget: { type: Number, required: true },
  other: { type: String }
}, { timestamps: true });

export default mongoose.model<ILead>('Lead', LeadSchema);