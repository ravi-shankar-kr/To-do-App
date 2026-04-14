import { Router } from "express";
import { createTask, getTask } from "../controllers/toDo.contrller.js";

const taskRouter = Router();

taskRouter.post("/createTask", createTask);
taskRouter.get("/getTask", getTask)


export default taskRouter;