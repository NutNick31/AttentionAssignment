import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import llmRoute from "./routes/llmRoute.js"
import userInteractionRoute from "./routes/userInteractionRoute.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/llm",llmRoute);
app.use("/api/v1/userinteraction",userInteractionRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log("Server is Running...");
})