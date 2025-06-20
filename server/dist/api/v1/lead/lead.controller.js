"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGetLeads = exports.handleCreateLead = void 0;
const lead_schema_1 = require("./lead.schema");
const lead_handler_1 = require("./lead.handler");
const lead_mails_1 = require("./lead.mails");
const handleCreateLead = async (req, res) => {
    try {
        const parsed = lead_schema_1.leadSchema.parse(req.body);
        const lead = await (0, lead_handler_1.createLead)(parsed);
        const service = new lead_mails_1.LeadMails(lead, 'fromLEad');
        const res1 = await service.send('emilyakoeli86@gmail.com');
        const res2 = await service.send('dimaboguzki@gmail.com');
        console.log('@@@@@@@@@@@@@@@@@@@');
        console.log(res1, 'res1');
        console.log(res2, 'res2');
        res.status(201).json(lead);
    }
    catch (err) {
        res.status(400).json({ error: err.message || 'Validation error' });
    }
};
exports.handleCreateLead = handleCreateLead;
const handleGetLeads = async (req, res) => {
    const leads = await (0, lead_handler_1.getLeads)();
    res.json(leads);
};
exports.handleGetLeads = handleGetLeads;
