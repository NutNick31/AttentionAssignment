import axios from "axios";

const extractResponse = (responseString) => {
    try {
        const jsonObjects = responseString
            .split('\n')
            .filter(line => line.trim() !== '');
        let fullResponse = '';
        jsonObjects.forEach(jsonString => {
            const parsed = JSON.parse(jsonString);
            if (parsed.message && parsed.message.content) {
                fullResponse += parsed.message.content;
            }
        });
        return fullResponse.trim();
    } catch (error) {
        console.error('Error parsing response:', error.message);
        return '';
    }
};

const ollamaChat = async (prompt, context = []) => {
    try {
        const response = await axios.post(
            'http://localhost:11434/api/chat',
            {
                model: 'myattention',
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    ...context,
                    { role: 'user', content: prompt }
                ]
            },
            { headers: { 'Content-Type': 'application/json' } }
        );
        const main = response.data
        console.log("MAIN DATA:", main)
        console.log(typeof(main))
        const answer = extractResponse(main)
        return answer;
    } catch (error) {
        console.error('Error communicating with Ollama:', error.message);
        throw error;
    }
};

export default ollamaChat;