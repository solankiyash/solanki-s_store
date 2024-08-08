import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    category:{
     type:String   
    },
    new_price:{
        type:Number
    },
    old_price:{
        type:Number
    },
    image:{
        type:String
    },
    size:{
        type:Array
    },
    total:{
        typr:Number
    },
    quantity:{
        type:Number
    }

})
export default mongoose.model("cart",CartSchema)
