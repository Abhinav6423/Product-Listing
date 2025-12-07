import express from "express";
import { createProduct , getProducts } from "../controller/Product.controller.js";

const router = express.Router();


router.post("/create", createProduct);
router.get("/list" , getProducts)



export default router;