import { Response } from "express";
const mongoose = require('mongoose');

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/';

export function connectToMongoose() {
    mongoose.connect(mongoURL, { dbName: 'HostelWorld' })
        .then((res: Response) => {
            console.log("Connection successful");
        }).catch((err: any) => {
            console.log(err.message);
        });
}