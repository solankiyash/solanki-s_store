import express from "express"
import { cartcontroller, cartDataGet, cretDataDelete } from "../Controller/cart.js"


const router = express.Router()

router.post("/data",cartcontroller)
router.get("/getdata",cartDataGet)
router.delete("/deletedata/:id",cretDataDelete)


export default router