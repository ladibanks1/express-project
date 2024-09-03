import {Router} from "express";
const router = Router();
import aboutpage from "../controllers/aboutpage.controller.js"
router.get("/" , aboutpage)
export default router