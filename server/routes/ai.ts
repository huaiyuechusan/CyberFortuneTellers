import express from 'express';
import { authMiddleware } from '../middlewares/auth';
import OpenAI from 'openai';

const router = express.Router();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post('/chat', authMiddleware, async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: req.body.messages,
      model: req.body.model || 'gpt-4',
      temperature: req.body.temperature,
      max_tokens: req.body.max_tokens
    });

    res.json({
      success: true,
      reply: completion.choices[0].message.content
    });
  } catch (error) {
    console.error('AI处理失败:', error);
    res.status(500).json({
      success: false,
      message: 'AI服务暂时不可用'
    });
  }
});

export default router; 