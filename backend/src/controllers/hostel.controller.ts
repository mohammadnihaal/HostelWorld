import { Request, Response } from "express";
import { ResponseFormatter } from "../middleware";
import { HostelService } from "../services/hostel.service";

const express = require('express');
export const hostelRouter = express.Router();

const hostelService = new HostelService();

hostelRouter.get('',async (req:Request,res: Response)=>{
    try{
        ResponseFormatter(res,"Data Fetched successfully",await hostelService.getDataByFilters(req.query) )
    }
    catch(err){
        ResponseFormatter(res,'Failed', [])
    }
});

hostelRouter.get('/cities',async (req: Request, res: Response)=>{
    try{
        ResponseFormatter(res,"Data Fetched successfully",await hostelService.getCities() )
    }
    catch(err){
        ResponseFormatter(res,'Failed', [])
    }
})

hostelRouter.get('/:id', async (req:Request, res:Response)=>{
    try{
        ResponseFormatter(res,"Data Fetched successfully",await hostelService.getHostelById(req.params.id) )
    }
    catch(err){
        ResponseFormatter(res,'Failed', [])
    }
})