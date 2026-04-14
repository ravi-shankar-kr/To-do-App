import express from "express"
import morgan from "morgan";
import taskRouter from "./routes/To-Do.routes.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));


app.use("/api", taskRouter)


export default app;