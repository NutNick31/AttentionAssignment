import express from "express";

const router = express.Router();

router.post('/chat', async (req, res) => {
    const { userId, message, context } = req.body;
    console.log(req.body);
    try {
        const response = await ollamaChat(message, context);
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: 'Failed to process the message' });
    }
});

export default router;