import {Router} from "express";
const router = Router();
import menupage from "../controllers/menupage.controller.js"
router.get("/" , menupage)
export default router