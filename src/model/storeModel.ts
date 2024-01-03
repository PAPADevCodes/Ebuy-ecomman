import mongoose from "mongoose"

interface store{
    title: string;
    image:string;
    imageID: string;
    cost: number;
};

interface istore extends store, mongoose.Document{};

const  storeModel = new mongoose.Schema(
    {
        title:{
type:String,
        },

        image:{
type:String,
        },

        imageID:{
type:String,
        },

        cost:{
type:Number,
        },

    },
);


export default mongoose.model<istore>("",storeModel);