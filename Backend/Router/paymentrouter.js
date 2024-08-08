import express from "express";
import { stripepayment,stripecheckoutsession } from "../Controller/payment.js";

const router = express.Router();

router.post("/payment", stripepayment);
router.get("/api/checkout-session",stripecheckoutsession)

export default router;
