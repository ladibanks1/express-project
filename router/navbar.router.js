import {Router} from "express";
const router = Router();
import navbar from "../controllers/navbar.controller.js"
router.get("/" , navbar)
export default router