import express from 'express';
import dotenv from 'dotenv';
import { connectToMongoose } from './DatabaseConnection';
import { router } from './router';
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(express.json());
app.use(router);


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

connectToMongoose();
