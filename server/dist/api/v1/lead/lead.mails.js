"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadMails = void 0;
const resend_1 = require("resend");
const resend = new resend_1.Resend('re_Mb2URhjw_3iXJHFgBw9qDGWXknJkQeBTc');
class LeadMails {
    constructor(lead, type) {
        this.subject = '';
        this.html = '';
        this.send = async (to) => {
            if (!to || !this.html) {
                throw new Error('Invalid parameters: "to" and "lead" are required.');
            }
            return await resend.emails.send({
                from: 'Emil <onboarding@resend.dev>',
                to: [to],
                subject: this.subject,
                html: this.html
            });
        };
        switch (type) {
            case 'fromLEad':
                const x = LeadMails.createLeadHtml(lead);
                this.subject = x.subject;
                this.html = x.html;
                break;
            default:
                break;
        }
    }
}
exports.LeadMails = LeadMails;
LeadMails.createLeadHtml = (lead) => {
    return {
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
            <h2>New Lead Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td><strong>Full Name:</strong></td><td>${lead.firstName} ${lead.lastName}</td></tr>
              <tr><td><strong>Phone:</strong></td><td>${lead.phone}</td></tr>
              <tr><td><strong>City:</strong></td><td>${lead.city}</td></tr>
              <tr><td><strong>Area:</strong></td><td>${lead.area.join(', ')}</td></tr>
              <tr><td><strong>Type:</strong></td><td>${lead.type.join(', ')}</td></tr>
              <tr><td><strong>Number of Rooms:</strong></td><td>${lead.number_rooms.join(', ')}</td></tr>
              <tr><td><strong>Priority:</strong></td><td>${lead.priority.join(', ')}</td></tr>
              <tr><td><strong>Max Budget:</strong></td><td>${lead.max_budget.toLocaleString()} ₪</td></tr>
              ${lead.other ? `<tr><td><strong>Other:</strong></td><td>${lead.other}</td></tr>` : ''}
            </table>
          </div>
        `,
        subject: `${lead.firstName} ${lead.lastName} - ${lead.phone}`
    };
};
