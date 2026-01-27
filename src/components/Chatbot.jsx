import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import { FaPaperPlane, FaTimes, FaCommentDots } from 'react-icons/fa';
import { GoogleGenerativeAI } from "@google/generative-ai";
import profileImg from '../assets/default.jpg';
import portfolioData from '../data/portfolioData';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi there! I'm Kristan. Thanks for visiting my portfolio. How can I help you?",
            sender: 'bot',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = {
            id: Date.now(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-pro-latest" });


            const history = messages.slice(-10).map(msg => ({
                role: msg.sender === 'user' ? 'user' : 'model',
                parts: [{ text: msg.text }]
            }));

            // Add the new user message
            history.push({
                role: 'user',
                parts: [{ text: userMessage.text }]
            });

            // Construct the context prompt using portfolioData
            const contextPrompt = `
You are Kristan C. Martinito. This is your portfolio website, and you are chatting with a visitor.
Reply as YOURSELF (Kristan), not as an AI assistant. Use "I", "me", and "my".

Here is your background information:

**Bio:** ${portfolioData.personalInfo.bio}
**Age:** ${portfolioData.personalInfo.age} (Born: ${portfolioData.personalInfo.birthdate})
**Role:** ${portfolioData.personalInfo.role}
**Education:** ${portfolioData.personalInfo.education}
**Location:** ${portfolioData.personalInfo.location}

**Skills:**
- Frontend: ${portfolioData.skills.frontend.join(", ")}
- Backend: ${portfolioData.skills.backend.join(", ")}
- Tools: ${portfolioData.skills.tools.join(", ")}

**Projects:**
${portfolioData.projects.map(p => `- ${p.title}: ${p.description} (Tech: ${p.tech.join(", ")})`).join("\n")}

**Contact/Socials:**
- Facebook: ${portfolioData.socials.facebook}
- Instagram: ${portfolioData.socials.instagram}
- Twitter: ${portfolioData.socials.twitter}
- GitHub: ${portfolioData.socials.github}

**Instructions:**
- **Answer ONLY what is asked.** Do not give extra details unless specifically requested.
- **Go with the flow.** If the user says "Hi", just say "Hello" or "Hey". Don't write a paragraph intro.
- If asked "How old are you?", answer directly with "I'm 22 years old" or similar.
- **NO MARKDOWN.** Do not use asterisks (**bold**) or bullet points. Write in plain text sentences.
- Be professional, polite, and human.
- Don't pivot to your projects or skills unless the visitor brings it up.
- Never say "I am an AI". You are Kristan.
`;

            // Adjusting history to include context if it's short, or just prepend to the prompt
            const chat = model.startChat({
                history: [
                    {
                        role: "user",
                        parts: [{ text: contextPrompt }]
                    },
                    {
                        role: "model",
                        parts: [{ text: "Got it! I'm Kristan—chill, coding-obsessed, and ready to chat. Let's do this! 🤙" }]
                    },
                    ...history.slice(0, -1) // all previous history
                ],
            });

            const result = await chat.sendMessage(userMessage.text);
            const response = await result.response;
            const text = response.text();

            const botMessage = {
                id: Date.now() + 1,
                text: text,
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error("Error generating response:", error);
            console.error("API Key Status:", import.meta.env.VITE_GEMINI_API_KEY ? "Present" : "Missing/Undefined");

            const errorMessage = {
                id: Date.now() + 1,
                text: "Oops! My brain is having a slight hiccup connecting to the server. Please tell the developer to check the console! 😅",
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Toggle Button */}
            {!isOpen && (
                <button
                    className="chatbot-fab"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open Chat"
                >
                    <FaCommentDots />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chat-header">
                        <div className="chat-title">
                            <div className="bot-avatar-container">
                                <img src={profileImg} alt="Kristan" className="bot-avatar-img" />
                                <div className="online-status"></div>
                            </div>
                            <div className="chat-info">
                                <span className="chat-name">Chat with Kristan</span>
                                <span className="chat-status-text">Active now</span>
                            </div>
                        </div>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>
                            <FaTimes />
                        </button>
                    </div>

                    <div className="chat-messages">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`message ${msg.sender}`}>
                                <div className="message-content">{msg.text}</div>
                                <span className="message-time">{msg.timestamp}</span>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="typing-indicator">
                                <span>Typing</span>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="chat-input-area" onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            className="chat-input"
                            placeholder="Type a message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            disabled={isLoading}
                        />
                        <button type="submit" className="send-btn" disabled={isLoading || !inputValue.trim()}>
                            <FaPaperPlane />
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default Chatbot;
