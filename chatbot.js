import React, { useState } from 'react';
import './Chatbot.css';


const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessages = [...messages, { sender: 'user', text: input }];
      setMessages(newMessages);
      setInput('');
      
      // Simulate a doctor's response
      setTimeout(() => {
        const response = getDoctorResponse(input);
        setMessages([...newMessages, { sender: 'doctor', text: response }]);
      }, 1000);
    }
  };

  const getDoctorResponse = (question) => {
    // Hardcoded responses for demonstration
    const responses = {
      "What should I eat postpartum?": "It's important to eat a balanced diet with plenty of fruits, vegetables, protein, and whole grains.",
      "How long should I rest after delivery?": "Rest is crucial. It's recommended to rest as much as possible during the first few weeks postpartum.",
      "What exercises are safe postpartum?": "Start with gentle exercises like walking and gradually increase intensity. Always consult your doctor before starting any new exercise regimen."
    };
    
    return responses[question] || "Thank you for your question. Our doctors will review it and get back to you soon.";
  };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
