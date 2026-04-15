import express from "express"
import morgan from "morgan";
import taskRouter from "./routes/To-Do.routes.js";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(cors({
  origin: "http://localhost:5173", // ✅ REMOVE /
  credentials: true
}));


app.use("/api", taskRouter)


export default app;