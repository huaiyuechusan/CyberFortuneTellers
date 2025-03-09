import { useState } from 'react';
import { sendToAI } from '../services/chatService';
import { ChatMessage } from '../services/chatService';

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const newMessage: ChatMessage = { 
      role: 'user', 
      content: input 
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    
    setIsLoading(true);
    try {
      const aiResponse = await sendToAI([...messages, newMessage]);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: aiResponse 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, input, setInput, handleSend, isLoading };
}; 