import mongoose, { Schema } from "mongoose";

export interface IHostel extends Document{
    _id?: string;
    name: string;
    city: string;
    description: string;
    price: number;
    image: string,
    totalRating: number;
    usersRated: number;
}

const HostelSchema: Schema<IHostel> = new mongoose.Schema({
    name: {type: String, required: true, unique: true,trim: true},
    city: {type: String, required: true},
    description: {type: String, trim: true},
    price: {type: Number, trim: true, required: true},
    image: {type: String, trim: true, required: true},
    totalRating: {type: Number},
    usersRated: {type: Number},
})

export const Hostel = mongoose.model<IHostel>('hostel',HostelSchema);