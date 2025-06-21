"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLeads = exports.createLead = void 0;
const lead_model_1 = __importDefault(require("./lead.model"));
const createLead = async (input) => {
    try {
        const lead = await lead_model_1.default.create(input);
        console.log(lead);
        return lead;
    }
    catch (error) {
        console.error('Error creating lead:', error);
        throw new Error('Failed to create lead');
    }
};
exports.createLead = createLead;
const getLeads = async () => {
    return await lead_model_1.default.find({});
};
exports.getLeads = getLeads;
