import { Router } from "express";
import { createTask, deleteTask, getTask, getTasks, updateTass } from "../controllers/task_controllers.js";

const router = Router();

router.get('/tasks',getTasks)

router.get('/tasks/:id',getTask)

router.post('/tasks',createTask)

router.put('/tasks/:id',updateTass)

router.delete('/tasks/:id',deleteTask)

export default router;