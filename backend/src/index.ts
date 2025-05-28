import express from 'express';
import dotenv from 'dotenv';
import { connectToMongoose } from './DatabaseConnection';
import { router } from './router';
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: ['http://localhost:5173', 'https://loquacious-kangaroo-b61085.netlify.app'],
    credentials: true
}));

app.use(express.json());
app.use(router);

// ✅ Add root route for Render health check
app.get('/', (req, res) => {
  res.send('Welcome to the HostelWorld backend API');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

connectToMongoose();

