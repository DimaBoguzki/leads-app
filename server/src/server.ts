import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import leadRoutes from './api/v1/lead/lead.route';
import cors from 'cors';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/', (_req, res) => {
  res.send('Hello from Express');
});

app.use('/api/v1/leads', leadRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});