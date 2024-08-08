import cartdata from "../models/cartdata.js"

export const cartcontroller = async(req,res) => {
   try {
    const cartData = await new cartdata({
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
        size:req.body.size,
        total:req.body.total,
        image:req.body.image,
        quantity:req.body.quantity
        
    })
    await cartData.save()
    if(cartData){
    res.status(200).json(req.body)
    }else{
        res.status(402).json({message:"cart data not found"})
    }
    
   } catch (error) {
    res.status(500).json(error)
   }
}

export const cartDataGet = async(req,res) => {
    try {
       const getCartData = await cartdata.find();
       if(getCartData){
        res.status(200).json(getCartData)
       }else{
        res.status(401).json({message:"Cart-Data is not found!!"})
       }
    } catch (error) {
        res.status(500).json(error)
    }
}

export const cretDataDelete = async (req, res) => {
    const { id } = req.params; 
    try {
        await cartdata.findByIdAndDelete(id);
        res.status(200).json({ message: "Cart-Data Successfully Deleted!!!" });
    } catch (error) {
        res.status(500).json(error);
    }
};