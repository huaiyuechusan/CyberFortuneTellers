import axios from 'axios';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export const sendToAI = async (messages: ChatMessage[]): Promise<string> => {
  try {
    const response = await axios.post('/api/ai/chat', {
      messages,
      model: 'gpt-4',
      temperature: 0.7,
      max_tokens: 500
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    return response.data.reply;
  } catch (error) {
    console.error('AI请求失败:', error);
    return '暂时无法获取回答，请稍后再试';
  }
}; 