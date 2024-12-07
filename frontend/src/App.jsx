import React, { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      
      // Here you can simulate a response or connect to an API
      // setTimeout(() => {
        const body = {user:"user",message:input,context:messages}
        const response = await axios.post("http://localhost:8000/api/v1/llm//chat", body)
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Response from ChatGPT', sender: 'bot' },
        ]);
      // }, 1000);
    }
  };

  return (
      <div className="container">
        <div className="chat-container">
          <div className="chat-box">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="input-box">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
  );
}

export default App;
