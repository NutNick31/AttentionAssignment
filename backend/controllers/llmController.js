const axios = require('axios');

const ollamaChat = async (prompt, context = []) => {
    try {
        const response = await axios.post(
            'http://localhost:11434/api/chat',
            {
                model: 'chat',
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    ...context, // Include conversation history
                    { role: 'user', content: prompt }
                ]
            },
            { headers: { 'Content-Type': 'application/json' } }
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error communicating with Ollama:', error.message);
        throw error;
    }
};

export default ollamaChat;