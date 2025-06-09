import { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your healthcare assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    "Book an appointment",
    "Emergency services",
    "Find a doctor",
    "Hospital location",
    "Visiting hours",
    "Insurance information"
  ];

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (messageText = inputValue) => {
    if (!messageText.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('appointment') || message.includes('book')) {
      return "I can help you book an appointment! Please visit our appointment page or call us at (555) 123-4567. What type of specialist would you like to see?";
    } else if (message.includes('emergency')) {
      return "For medical emergencies, please call 911 immediately or visit our emergency room. Our emergency services are available 24/7.";
    } else if (message.includes('doctor') || message.includes('physician')) {
      return "We have excellent doctors across various specialties including Cardiology, Neurology, Pediatrics, and Orthopedics. Would you like information about a specific department?";
    } else if (message.includes('location') || message.includes('address')) {
      return "We're located at 123 Healthcare Avenue, Medical District, NY 10001. We're easily accessible by public transport and have parking available.";
    } else if (message.includes('hours') || message.includes('time')) {
      return "Our regular hours are Monday-Friday: 8:00 AM - 8:00 PM, Saturday-Sunday: 9:00 AM - 6:00 PM. Emergency services are available 24/7.";
    } else if (message.includes('insurance')) {
      return "We accept most major insurance plans. Please bring your insurance card and a valid ID for your visit. Contact us at (555) 123-4567 to verify your coverage.";
    } else if (message.includes('hello') || message.includes('hi')) {
      return "Hello! Welcome to HealthCare. I'm here to assist you with appointments, information about our services, or answer any questions you might have.";
    } else {
      return "Thank you for your message. For specific medical questions, please consult with our healthcare professionals. I can help you with appointments, general information, or direct you to the right department. How can I assist you?";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-avatar">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div className="chatbot-info">
            <h4>Healthcare Assistant</h4>
            <span className="status">Online</span>
          </div>
          <button 
            className="close-chat"
            onClick={handleToggleChat}
            aria-label="Close chat"
          >
            ×
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
            >
              <div className="message-content">
                <p>{message.text}</p>
                <span className="message-time">
                  {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="quick-replies">
          {quickReplies.map((reply, index) => (
            <button
              key={index}
              className="quick-reply-btn"
              onClick={() => handleSendMessage(reply)}
            >
              {reply}
            </button>
          ))}
        </div>

        <div className="chatbot-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="chat-input"
          />
          <button 
            onClick={() => handleSendMessage()}
            className="send-btn"
            aria-label="Send message"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>      <button 
        className={`chatbot-trigger ${isOpen ? 'hidden' : ''}`}
        onClick={handleToggleChat}
        aria-label="Open chat"
      >        <div className="trigger-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C13.1 2 14 2.9 14 4V8L19 8C20.1 8 21 8.9 21 10V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V10C3 8.9 3.9 8 5 8H10V4C10 2.9 10.9 2 12 2ZM12 4V8H12V4ZM5 10V18H19V10H5ZM7 12H17V14H7V12ZM7 15H13V16H7V15Z"/>
          </svg>
        </div>
        <div className="notification-badge">1</div>
      </button>
    </>
  );
};

export default ChatBot;
