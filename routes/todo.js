import { Router } from "express";

import { gettodos } from "../controller/GetTodos.js";
import { createtodos } from "../controller/Todo.js";
const router = Router();
router.post("/createtodo", createtodos);
router.get("/gettodos", gettodos);

export default router;
