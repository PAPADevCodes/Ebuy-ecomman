import mongoose from "mongoose"

interface user{
    email: string;
    password:string;
    username: string;
};

interface iuser extends user, mongoose.Document{};

const  authmodel = new mongoose.Schema(
    {
        email:{
type:String,
        },

        password:{
type:String,
        },

        username:{
type:String,
        },
    },
);
export default mongoose.model<iuser>("",authmodel);