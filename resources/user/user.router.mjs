import express from "express";
import { me, updateMe } from "./user.controllers.mjs";

const router = express.Router();

router.get("/", me);
router.put("/", updateMe);

export default router;
