import { Response } from "express";
import { IHostel } from "./models/hostel.model";

export function ResponseFormatter(res:Response,
    message: string,
    data?: Partial<IHostel>[]| IHostel | Partial<IHostel>[] | IHostel[]| undefined | null){
    return res.json({
        success: true,
        message: message,
        data: data
    })
}