import express from "express";
import { login, signup } from "../Controller/userdata.js";

const router = express.Router();

router.post("/user", signup);
router.post("/login", login);

export default router;
