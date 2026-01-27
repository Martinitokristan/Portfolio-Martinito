import React, { useState } from 'react';
import './ContactModal.css';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';

const ContactModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    if (!isOpen) return null;

    const handleSendMessage = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch("https://formsubmit.co/ajax/kristanmartinito2003@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    message: message,
                    name: "MY PORTFOLIO",
                    date: new Date().toLocaleString(),
                    _subject: "New Portfolio Message!"
                })
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    setStatus('idle');
                    setEmail('');
                    setMessage('');
                    onClose();
                }, 2000);
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="glass-card modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} disabled={status === 'sending'}>
                    <FaTimes />
                </button>

                <div className="modal-header">
                    <h3 className="section-title">Send a Message</h3>
                    <p className="modal-subtitle">I'll get back to you as soon as possible</p>
                </div>

                <form onSubmit={handleSendMessage} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            disabled={status === 'sending' || status === 'success'}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message here..."
                            required
                            disabled={status === 'sending' || status === 'success'}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className={`action-btn primary submit-btn ${status}`}
                        disabled={status === 'sending' || status === 'success'}
                    >
                        {status === 'idle' && <><FaPaperPlane /> Send Message</>}
                        {status === 'sending' && "Sending..."}
                        {status === 'success' && "Message Sent!"}
                        {status === 'error' && "Error! Try Again"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
