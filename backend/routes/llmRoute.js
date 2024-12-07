import express from "express";
import ollamaChat from "../controllers/llmController.js";

const router = express.Router();

router.post('/chat', async (req, res) => {
    const { userId, message, context } = req.body;
    try {
        console.log("It entered here")
        const response = await ollamaChat(message, context);
        console.log("It came here as well...")
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: 'Failed to process the message' });
    }
});

router.get('/chat', async (req, res) => {
    res.json({success: true, messsage:"It is worling fine...."})
});

export default router;