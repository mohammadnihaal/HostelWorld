const express = require('express');
export const router = express.Router();
import { hostelRouter } from "./controllers/hostel.controller";


router.use('/hostel',hostelRouter);