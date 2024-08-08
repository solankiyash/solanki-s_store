import express from "express";
import upload from "../middelwere/upload.js";
import { uploadfile } from "../Controller/uploadfile.js";

const router = express.Router();

router.post("/upload", upload.single("product"), uploadfile);

export default router;
