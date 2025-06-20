"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leadSchema = void 0;
const zod_1 = require("zod");
exports.leadSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1),
    lastName: zod_1.z.string().min(1),
    phone: zod_1.z.string().min(5),
    city: zod_1.z.string(),
    area: zod_1.z.array(zod_1.z.string()),
    type: zod_1.z.array(zod_1.z.string()),
    number_rooms: zod_1.z.array(zod_1.z.string()),
    priority: zod_1.z.array(zod_1.z.string()),
    max_budget: zod_1.z.number(),
    other: zod_1.z.string().optional()
});
