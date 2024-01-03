import { Request, Response } from "express"
import bcrypt from "bcrypt"
import authModel from "../model/authModel"


export const creatAuth =async (req: Request,res:Response) => {
    try {
        const {userNmae, email, password} = req.body

        const salt = await bcrypt.gensalt(10)
    } catch (error) { 
        console.log(error);
        
    }
}

export const signinAuth =async (req: Request,res:Response) => {
    try {
        const {email, password} = req.body

        const user = await authModel.findOne({email});

if(user){
    const vaildPass = await bcrypt.compare

}


    } catch (error) { 
      console.log(error);
        
    }
}