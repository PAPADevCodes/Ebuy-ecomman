import { Request,Response } from "express"
import mongoose from "mongoose"

export const createStore =async (req:Request, res:Response,) => {
    try {
        const  {title, cost} = req.body;

        // const {secure_url} : any 
    } catch (error) {
        
    }
}