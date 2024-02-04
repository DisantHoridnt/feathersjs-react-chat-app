import React, { useState, useEffect, useRef } from 'react';
import client from './feathersClient';

const Chat = ({ onLogout }) => {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    const chatRef = useRef(null);

    useEffect(() => {
        const fetchMessages = async () => {
            const messages = await client.service('messages').find({
                query: {
                    $sort: { createdAt: -1 },
                    $limit: 25,
                },
            });
            setMessages(messages.data.reverse());
        };

        fetchMessages();

        client.service('messages').on('created', (message) => {
            setMessages((currentMessages) => [...currentMessages, message]);
        });

        return () => {
            client.service('messages').removeListener('created');
        };
    }, []);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        await client.service('messages').create({ text });
        setText('');
    };

    return (
      <div className="flex flex-col h-screen bg-gray-900 text-gray-200">
        <div className="flex-none p-4 bg-gray-800">
          <button onClick={onLogout} className="btn bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button>
        </div>
        <div className="flex-grow overflow-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className="p-2 bg-gray-700 rounded-lg w-2/3">
              <strong>{msg.user?.email}: </strong>
              <span>{msg.text}</span>
            </div>
          ))}
        </div>
        <div className="flex-none p-4 bg-gray-800">
          <form onSubmit={sendMessage} className="flex space-x-2">
            <input
              className="input flex-grow p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type a message"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" className="btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
          </form>
        </div>
      </div>    
    );
};

export default Chat;
