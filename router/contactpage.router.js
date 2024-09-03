import {Router} from "express";
const router = Router();
import contactpage from "../controllers/contactpage.controller.js"
router.get("/" , contactpage)
export default router