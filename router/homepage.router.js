import {Router} from "express";
const router = Router();
import homepage from "../controllers/homepage.controller.js";
router.get("/" , homepage)
export default router