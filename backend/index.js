import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import llmRoute from "./routes/llmRoute.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/llm",llmRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log(`Server is Running on ${PORT}`);
})