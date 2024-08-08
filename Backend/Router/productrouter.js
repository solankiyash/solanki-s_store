import express from "express";
import {
  findproductbyid,
  getallproduct,
  products,
  removeproducts,
  updateproduct,
  ratingproduct,
  getratingdata
} from "../Controller/products.js";

const router = express.Router();

router.post("/addproduct", products);
router.post("/removeproduct", removeproducts);
router.put("/updateproduct/:id", updateproduct);
router.get("/getallproduct", getallproduct);
router.post("/getproduct/:id", findproductbyid);
router.post("/getratingproduct/:id",ratingproduct)
router.get("/getreviews/:id",getratingdata)

export default router;
