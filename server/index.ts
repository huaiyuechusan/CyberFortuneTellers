import express from 'express';
import cors from 'cors';
import aiRouter from './routes/ai';
// ...
const app = express();

// ...

// 添加必要中间件
app.use(cors());
app.use(express.json());

// ...

app.use('/api/ai', aiRouter);

// ...

// ...

// 启动服务器
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 