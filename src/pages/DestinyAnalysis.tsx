import React, { useState } from 'react';
import ElementsDisplay from '../components/DestinyChart/ElementsDisplay';
import { UserInfo, ElementAnalysis } from '../types';
import { useChat } from '../hooks/useChat';

const DestinyAnalysis: React.FC = () => {
  const { messages, input, setInput, handleSend, isLoading } = useChat();
  const [activeTab, setActiveTab] = useState('basic');
  const [userInfo] = useState<UserInfo>({
    name: "天命人AQHV",
    gender: "男",
    birthDate: "1998-07-31 14:10:00",
    solarDate: "1998-07-31 14:10:00",
    lunarDate: "一九九八戊寅年六月初九日未时"
  });

  return (
    <div className="relative h-screen">
      {/* 左侧侧边栏 */}
      <div className="w-64 bg-gray-900 h-full fixed left-0 top-0 z-10 p-4">
        {/* 添加logo */}
        <div className="mb-8">
          <img src={`${process.env.PUBLIC_URL}/image/logo.png`} alt="天机" className="h-8" />
        </div>
        
        {/* 添加菜单项 */}
        <nav className="space-y-2">
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 text-yellow-500">
            <span className="text-xl">👤</span>
            <span>基本信息</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 text-white">
            <span className="text-xl">📋</span>
            <span>个性报告</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 text-white">
            <span className="text-xl">🌟</span>
            <span>人生简况</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 text-white">
            <span className="text-xl">📈</span>
            <span>大运流年</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 text-white">
            <span className="text-xl">💼</span>
            <span>事业</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 text-white">
            <span className="text-xl">💕</span>
            <span>婚恋</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 text-white">
            <span className="text-xl">💰</span>
            <span>财富</span>
          </a>
        </nav>
      </div>
      
      {/* 左侧内容区 */}
      <div className="fixed left-64 top-0 bottom-0 right-1/2 bg-gray-900 text-white overflow-y-auto p-6">
        {/* 顶部用户信息 */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-2xl">命</span>
            </div>
            <div>
              <h2 className="text-xl font-bold">{userInfo.name}</h2>
              <p className="text-gray-400">
                {userInfo.gender} | {userInfo.birthDate}
              </p>
              <p className="text-gray-400">{userInfo.lunarDate}</p>
            </div>
          </div>
        </div>

        {/* 命盘显示 */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold mb-4">八字命盘</h3>
          <ElementsDisplay elements={mockElements} />
        </div>

        {/* 分析报告 */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex space-x-4 mb-4">
            <button
              className={`px-4 py-2 rounded ${
                activeTab === 'basic' ? 'bg-yellow-500 text-black' : 'bg-gray-700'
              }`}
              onClick={() => setActiveTab('basic')}
            >
              性格特点
            </button>
            <button
              className={`px-4 py-2 rounded ${
                activeTab === 'career' ? 'bg-yellow-500 text-black' : 'bg-gray-700'
              }`}
              onClick={() => setActiveTab('career')}
            >
              事业发展
            </button>
          </div>

          <div className="space-y-4">
            {activeTab === 'basic' && (
              <div>
                <h4 className="font-bold mb-2">性格优点</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>温和细腻：善于倾听与理解他人，能够以平和的态度处理人际关系</li>
                  <li>勤奋踏实：工作中表现出勤奋与踏实的态度，追求高质量的完成工作</li>
                  <li>善于学习：对知识有较强的渴求，善于学习与总结</li>
                </ul>
              </div>
            )}
            
            {activeTab === 'career' && (
              <div>
                <h4 className="font-bold mb-2">做事风格</h4>
                <p className="text-gray-300">
                  在工作中非常注重细节，常常追求完美，善于在安静的环境中进行思考与创作。
                  具有很强的责任感，能够细心处理工作中的每一个环节。
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 右侧聊天区 */}
      <div className="fixed left-1/2 top-0 bottom-0 right-0 bg-gray-800 border-l border-gray-700 flex flex-col">
        {/* 添加聊天标题 */}
        <div className="p-4 border-b border-gray-700 bg-gray-900">
          <h3 className="text-lg font-bold text-white">AI命理师</h3>
          <p className="text-sm text-gray-400">随时为您解答命理问题</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* 添加欢迎消息 */}
          {messages.length === 0 ? (
            <div className="bg-gray-700 p-3 rounded-lg">
              <p>您好，我是您的AI命理顾问。请告诉我您想了解的命理问题，例如：</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>我的八字有什么特点？</li>
                <li>我适合从事什么行业？</li>
                <li>我的财运如何？</li>
              </ul>
            </div>
          ) : (
            // 原有的消息列表
            messages.map((msg, i) => (
              <div key={i} className={`p-3 rounded-lg ${msg.role === 'user' 
                ? 'bg-blue-600 text-white ml-auto' 
                : 'bg-gray-700'}`}>
                {msg.content}
                {isLoading && i === messages.length - 1 && (
                  <div className="flex space-x-1 mt-2">
                    <div className="typing-indicator" />
                    <div className="typing-indicator" style={{animationDelay: '0.2s'}} />
                    <div className="typing-indicator" style={{animationDelay: '0.4s'}} />
                  </div>
                )}
              </div>
            ))
          )}
        </div>
        
        <div className="p-4 border-t border-gray-700 bg-gray-900">
          <div className="flex gap-2">
            <textarea
              className="flex-1 p-2 bg-gray-700 rounded text-white"
              placeholder="输入你的问题..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
              rows={3}
            />
            <button 
              className={`px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-600 transition ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={handleSend}
              disabled={isLoading}>
              发送
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 模拟数据
const mockElements: ElementAnalysis = {
  yearPillar: "戊",
  monthPillar: "己",
  dayPillar: "己",
  hourPillar: "辛",
  elements: [
    { heaven: "戊", earth: "寅" },
    { heaven: "己", earth: "未" },
    { heaven: "己", earth: "卯" },
    { heaven: "辛", earth: "未" }
  ]
};

export default DestinyAnalysis; 