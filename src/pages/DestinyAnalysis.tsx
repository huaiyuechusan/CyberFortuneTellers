import React, { useState } from 'react';
import ElementsDisplay from '../components/DestinyChart/ElementsDisplay';
import { UserInfo, ElementAnalysis } from '../types';
import { useChat } from '../hooks/useChat';

const DestinyAnalysis: React.FC = () => {
  const { messages, input, setInput, handleSend, isLoading } = useChat();
  const [activeTab, setActiveTab] = useState('basic');
  const [activePage, setActivePage] = useState('basic');
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
          <a 
            href="#" 
            className={`flex items-center space-x-3 p-3 rounded-lg ${activePage === 'basic' ? 'bg-gray-800 text-yellow-500' : 'hover:bg-gray-800 text-white'}`}
            onClick={() => setActivePage('basic')}
          >
            <span className="text-xl">👤</span>
            <span>基本信息</span>
          </a>
          <a 
            href="#" 
            className={`flex items-center space-x-3 p-3 rounded-lg ${activePage === 'report' ? 'bg-gray-800 text-yellow-500' : 'hover:bg-gray-800 text-white'}`}
            onClick={() => setActivePage('report')}
          >
            <span className="text-xl">📋</span>
            <span>个性报告</span>
          </a>
          <a 
            href="#" 
            className={`flex items-center space-x-3 p-3 rounded-lg ${activePage === 'lifeSummary' ? 'bg-gray-800 text-yellow-500' : 'hover:bg-gray-800 text-white'}`}
            onClick={() => setActivePage('lifeSummary')}
          >
            <span className="text-xl">🌟</span>
            <span>人生简况</span>
          </a>
          <a 
            href="#" 
            className={`flex items-center space-x-3 p-3 rounded-lg ${activePage === 'destiny' ? 'bg-gray-800 text-yellow-500' : 'hover:bg-gray-800 text-white'}`}
            onClick={() => setActivePage('destiny')}
          >
            <span className="text-xl">📈</span>
            <span>大运流年</span>
          </a>
          <a 
            href="#" 
            className={`flex items-center space-x-3 p-3 rounded-lg ${activePage === 'career' ? 'bg-gray-800 text-yellow-500' : 'hover:bg-gray-800 text-white'}`}
            onClick={() => setActivePage('career')}
          >
            <span className="text-xl">💼</span>
            <span>事业</span>
          </a>
          <a 
            href="#" 
            className={`flex items-center space-x-3 p-3 rounded-lg ${activePage === 'love' ? 'bg-gray-800 text-yellow-500' : 'hover:bg-gray-800 text-white'}`}
            onClick={() => setActivePage('love')}
          >
            <span className="text-xl">💕</span>
            <span>婚恋</span>
          </a>
          <a 
            href="#" 
            className={`flex items-center space-x-3 p-3 rounded-lg ${activePage === 'wealth' ? 'bg-gray-800 text-yellow-500' : 'hover:bg-gray-800 text-white'}`}
            onClick={() => setActivePage('wealth')}
          >
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

        {/* 基本信息页面 */}
        {activePage === 'basic' && (
          <>
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
          </>
        )}

        {/* 个性报告页面 */}
        {activePage === 'report' && (
          <div className="space-y-6">
            {/* 五行分析 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">五</span>
                五行分析
              </h3>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-500">金</span>
                  <div className="w-4/5 bg-gray-700 rounded-full h-2.5">
                    <div className="bg-yellow-200 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <span className="text-yellow-500">65%</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-500">木</span>
                  <div className="w-4/5 bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <span className="text-green-500">40%</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-500">水</span>
                  <div className="w-4/5 bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <span className="text-blue-500">30%</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-red-500">火</span>
                  <div className="w-4/5 bg-gray-700 rounded-full h-2.5">
                    <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <span className="text-red-500">25%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600">土</span>
                  <div className="w-4/5 bg-gray-700 rounded-full h-2.5">
                    <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <span className="text-yellow-600">70%</span>
                </div>
              </div>
              
              <div className="p-4 border border-gray-700 rounded-lg bg-gray-850">
                <h4 className="font-bold text-yellow-500 mb-2">五行分析解读</h4>
                <p className="text-gray-300 mb-3">
                  您的八字中<span className="text-yellow-600">土</span>与<span className="text-yellow-500">金</span>较为旺盛，
                  而<span className="text-red-500">火</span>相对不足。这表明您具有稳重、踏实的性格特点，
                  做事有条理，善于规划，但可能缺乏激情与创造力。
                </p>
                <p className="text-gray-300">
                  建议在生活中适当增加<span className="text-red-500">火</span>的元素，如穿红色衣物，
                  在居住环境中添加红色装饰，或从事需要创造力的活动，以平衡五行。
                </p>
              </div>
            </div>
            
            {/* 性格特质 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">性</span>
                性格特质
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-750 p-4 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-500 mb-2">优势特质</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>稳重可靠，处事冷静</li>
                    <li>责任感强，做事认真</li>
                    <li>思维缜密，善于分析</li>
                    <li>坚韧不拔，意志力强</li>
                  </ul>
                </div>
                
                <div className="bg-gray-750 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-500 mb-2">挑战特质</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>过于谨慎，缺乏冒险精神</li>
                    <li>情感表达不足，显得冷淡</li>
                    <li>固执己见，不易接受新观念</li>
                    <li>要求过高，容易给自己压力</li>
                  </ul>
                </div>
              </div>
              
              <div className="p-4 border border-gray-700 rounded-lg bg-gray-850">
                <h4 className="font-bold text-yellow-500 mb-2">命理师点评</h4>
                <p className="text-gray-300 mb-3">
                  您的八字格局为"偏印格"，主人聪明好学，思维敏捷，但容易钻牛角尖。
                  土金旺盛使您做事稳重有序，但也可能导致性格固执，不易变通。
                </p>
                <p className="text-gray-300">
                  建议在人际交往中多展现温和的一面，学会适当放松自己的标准，
                  接纳不同观点，这将有助于您的事业发展和人际关系的和谐。
                </p>
              </div>
            </div>
            
            {/* 天赋潜能 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">天</span>
                天赋潜能
              </h3>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-750 p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto flex items-center justify-center mb-2">
                    <span className="text-xl">🧠</span>
                  </div>
                  <h4 className="font-bold text-yellow-500 mb-1">分析能力</h4>
                  <div className="flex justify-center">
                    <span className="text-yellow-500 text-lg">★★★★★</span>
                  </div>
                </div>
                
                <div className="bg-gray-750 p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto flex items-center justify-center mb-2">
                    <span className="text-xl">🤝</span>
                  </div>
                  <h4 className="font-bold text-blue-500 mb-1">领导能力</h4>
                  <div className="flex justify-center">
                    <span className="text-blue-500 text-lg">★★★★☆</span>
                  </div>
                </div>
                
                <div className="bg-gray-750 p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto flex items-center justify-center mb-2">
                    <span className="text-xl">💡</span>
                  </div>
                  <h4 className="font-bold text-green-500 mb-1">创造力</h4>
                  <div className="flex justify-center">
                    <span className="text-green-500 text-lg">★★★☆☆</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border border-gray-700 rounded-lg bg-gray-850">
                <h4 className="font-bold text-yellow-500 mb-2">潜能发展建议</h4>
                <p className="text-gray-300 mb-3">
                  您的八字显示在分析和规划方面有极强的天赋，适合从事需要精确分析和系统思维的工作。
                  领导能力也较为突出，具有组织和管理团队的潜力。
                </p>
                <p className="text-gray-300">
                  建议通过参与创意活动或跨领域学习来提升创造力，
                  这将使您的能力结构更加全面，为事业发展提供更多可能性。
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 人生简况页面 */}
        {activePage === 'lifeSummary' && (
          <div className="space-y-6">
            {/* 命运总览 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">命</span>
                命运总览
              </h3>
              
              <div className="p-4 border border-gray-700 rounded-lg bg-gray-850 mb-6">
                <h4 className="font-bold text-yellow-500 mb-2">八字命盘解析</h4>
                <p className="text-gray-300 mb-3">
                  您八字中<span className="text-yellow-600">土</span>旺<span className="text-yellow-500">金</span>生，
                  为"偏印格"命局，主聪明好学，性格沉稳，适合从事需要专注力和分析能力的工作。
                  命局中<span className="text-red-500">火</span>弱，故事业发展需借助贵人扶持，
                  四十岁前需稳扎稳打，四十岁后运势渐入佳境。
                </p>
                <p className="text-gray-300">
                  总体而言，您的命局属于"先苦后甜"型，年轻时需付出较多努力，
                  中年后方能享受成果。一生财运平稳，婚姻和谐，健康方面需注意肺部及消化系统。
                </p>
              </div>
              
              {/* 命运之轮 */}
              <div className="relative w-full h-64 mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full border-4 border-yellow-500 flex items-center justify-center relative">
                    <div className="w-48 h-48 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full border border-yellow-300 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black font-bold">
                          命轮
                        </div>
                      </div>
                    </div>
                    
                    {/* 命运标记 - 北方 */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-center">
                      <div className="w-6 h-6 rounded-full bg-blue-500 mx-auto mb-1"></div>
                      <span className="text-xs text-blue-500">水 - 智慧</span>
                    </div>
                    
                    {/* 命运标记 - 南方 */}
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-center">
                      <div className="w-6 h-6 rounded-full bg-red-500 mx-auto mb-1"></div>
                      <span className="text-xs text-red-500">火 - 激情</span>
                    </div>
                    
                    {/* 命运标记 - 东方 */}
                    <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 text-center">
                      <div className="w-6 h-6 rounded-full bg-green-500 mx-auto mb-1"></div>
                      <span className="text-xs text-green-500">木 - 成长</span>
                    </div>
                    
                    {/* 命运标记 - 西方 */}
                    <div className="absolute top-1/2 -left-3 transform -translate-y-1/2 text-center">
                      <div className="w-6 h-6 rounded-full bg-yellow-200 mx-auto mb-1"></div>
                      <span className="text-xs text-yellow-200">金 - 收获</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 人生阶段分析 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">阶</span>
                人生阶段分析
              </h3>
              
              {/* 人生运势曲线 */}
              <div className="relative w-full h-64 mb-6 bg-gray-850 rounded-lg p-4">
                <h4 className="font-bold text-yellow-500 mb-4">人生运势曲线</h4>
                <div className="relative h-40">
                  {/* Y轴标签 */}
                  <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-gray-400">
                    <span>顺</span>
                    <span>平</span>
                    <span>逆</span>
                  </div>
                  
                  {/* 曲线图 */}
                  <div className="absolute left-10 right-0 top-0 bottom-0">
                    {/* 横向参考线 */}
                    <div className="absolute top-0 left-0 right-0 border-t border-gray-700"></div>
                    <div className="absolute top-1/2 left-0 right-0 border-t border-gray-700"></div>
                    <div className="absolute bottom-0 left-0 right-0 border-t border-gray-700"></div>
                    
                    {/* 运势曲线 - 使用SVG绘制 */}
                    <svg className="absolute inset-0 w-full h-full">
                      <path 
                        d="M0,80 C30,100 60,120 90,90 C120,60 150,30 180,40 C210,50 240,20 270,10 C300,0 330,30 360,20 C390,10 420,40 450,30" 
                        fill="none" 
                        stroke="url(#gradient)" 
                        strokeWidth="3"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="50%" stopColor="#EF4444" />
                          <stop offset="100%" stopColor="#F59E0B" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* 关键点标记 */}
                    <div className="absolute top-[90px] left-[90px] w-4 h-4 bg-blue-500 rounded-full transform -translate-x-2 -translate-y-2"></div>
                    <div className="absolute top-[40px] left-[180px] w-4 h-4 bg-red-500 rounded-full transform -translate-x-2 -translate-y-2"></div>
                    <div className="absolute top-[10px] left-[270px] w-4 h-4 bg-yellow-500 rounded-full transform -translate-x-2 -translate-y-2"></div>
                    <div className="absolute top-[30px] left-[450px] w-4 h-4 bg-green-500 rounded-full transform -translate-x-2 -translate-y-2"></div>
                  </div>
                  
                  {/* X轴标签 */}
                  <div className="absolute left-10 right-0 bottom-[-20px] flex justify-between text-xs text-gray-400">
                    <span>0岁</span>
                    <span>20岁</span>
                    <span>40岁</span>
                    <span>60岁</span>
                    <span>80岁</span>
                  </div>
                </div>
              </div>
              
              {/* 关键年龄点 */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-750 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-2 text-xs">23</div>
                    <h4 className="font-bold text-blue-500">事业起点期</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    23-27岁是您事业的起步阶段，会遇到贵人相助，
                    但需谨慎选择发展方向，避免频繁变动。
                  </p>
                </div>
                
                <div className="bg-gray-750 p-4 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mr-2 text-xs">32</div>
                    <h4 className="font-bold text-red-500">事业转折期</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    32-35岁将面临事业上的重要抉择，
                    此时的决定将影响未来十年发展，需慎重考虑。
                  </p>
                </div>
                
                <div className="bg-gray-750 p-4 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center mr-2 text-xs">42</div>
                    <h4 className="font-bold text-yellow-500">财富积累期</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    42-48岁是您财富积累的黄金时期，
                    事业将进入稳定发展阶段，收入显著提升。
                  </p>
                </div>
                
                <div className="bg-gray-750 p-4 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-2 text-xs">55</div>
                    <h4 className="font-bold text-green-500">事业巅峰期</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    55-62岁将迎来事业的巅峰，
                    社会地位和影响力达到最高，但需注意健康状况。
                  </p>
                </div>
              </div>
              
              <div className="p-4 border border-gray-700 rounded-lg bg-gray-850">
                <h4 className="font-bold text-yellow-500 mb-2">命理师建议</h4>
                <p className="text-gray-300 mb-3">
                  您的命局显示"先难后易"的人生走势，年轻时需勤奋努力，中年后方见成效。
                  建议在30岁前打好基础，积累经验；30-40岁稳中求进，避免冒进；
                  40岁后可适当扩大事业规模，把握机遇。
                </p>
                <p className="text-gray-300">
                  在重要人生节点，尤其是32岁和42岁前后，应特别留意周围环境变化，
                  把握机遇，避开风险。同时，55岁后应注重健康养生，适当放缓节奏，
                  以保证晚年生活质量。
                </p>
              </div>
            </div>
            
            {/* 吉凶宜忌 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">宜</span>
                吉凶宜忌
              </h3>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-green-500 mb-3 flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2 text-black text-xs">宜</span>
                    人生宜行
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-300">宜居住坐北朝南的住宅，有利事业发展</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-300">宜与金、土相旺之人合作，能相互促进</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-300">宜从事金融、地产、教育等行业，发展顺利</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-300">宜佩戴黄色、金色饰品，增强运势</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-300">宜稳健投资，长线规划，不宜投机</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-red-500 mb-3 flex items-center">
                    <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-2 text-black text-xs">忌</span>
                    人生宜忌
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-300">忌居住靠近水域的地方，不利财运</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-300">忌与火相旺之人共事，易产生冲突</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-300">忌从事高风险行业，如股票、赌博等</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-300">忌穿着过多蓝色、黑色服饰，影响运势</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-300">忌独断专行，应多听取他人意见</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="p-4 border border-gray-700 rounded-lg bg-gray-850">
                <h4 className="font-bold text-yellow-500 mb-2">开运化解</h4>
                <p className="text-gray-300 mb-3">
                  您命中<span className="text-red-500">火</span>弱，可通过以下方式调和：
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">1.</span>
                    <span>居家环境可适当摆放红色装饰品，或在南方位置放置红色物品</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">2.</span>
                    <span>佩戴红玛瑙、红石榴石等饰品，增强火元素</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">3.</span>
                    <span>适当参与社交活动，扩大人脉圈，增加贵人相助机会</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">4.</span>
                    <span>每年农历六月可做善事，有助化解不利</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 大运流年页面 */}
        {activePage === 'destiny' && (
          <div className="space-y-6">
            {/* 大运总览 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">运</span>
                大运总览
              </h3>
              
              {/* 大运流程图 */}
              <div className="relative w-full overflow-x-auto pb-4 mb-6">
                <div className="flex space-x-1 min-w-max">
                  {[
                    { age: "0-10", name: "童年运", color: "bg-blue-500", element: "水" },
                    { age: "10-20", name: "少年运", color: "bg-green-500", element: "木" },
                    { age: "20-30", name: "青年运", color: "bg-red-500", element: "火" },
                    { age: "30-40", name: "壮年运", color: "bg-yellow-600", element: "土" },
                    { age: "40-50", name: "中年运", color: "bg-yellow-200", element: "金" },
                    { age: "50-60", name: "盛年运", color: "bg-blue-600", element: "水" },
                    { age: "60-70", name: "花甲运", color: "bg-green-600", element: "木" },
                    { age: "70-80", name: "古稀运", color: "bg-red-600", element: "火" }
                  ].map((period, index) => (
                    <div key={index} className={`flex-1 min-w-[120px] ${period.color} bg-opacity-20 p-3 rounded-lg border border-${period.color.replace('bg-', '')} text-center`}>
                      <div className={`w-8 h-8 ${period.color} rounded-full mx-auto mb-2 flex items-center justify-center text-white text-xs font-bold`}>
                        {period.element}
                      </div>
                      <h4 className="font-bold text-white mb-1">{period.name}</h4>
                      <p className="text-xs text-gray-300">{period.age}岁</p>
                    </div>
                  ))}
                </div>
                
                {/* 当前位置指示器 */}
                <div className="absolute top-0 left-[270px] w-[120px] h-full border-2 border-yellow-500 rounded-lg pointer-events-none"></div>
              </div>
              
              <div className="p-4 border border-gray-700 rounded-lg bg-gray-850">
                <h4 className="font-bold text-yellow-500 mb-2">当前大运解析</h4>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">火运</div>
                  <div>
                    <h5 className="font-bold text-white">丙午大运 (20-30岁)</h5>
                    <p className="text-sm text-gray-400">2018年8月15日 - 2028年8月15日</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-3">
                  您目前正处于丙午火运，此大运对您而言为"财官双美"之运。丙火生助您命中弱火，
                  有利于事业发展和人际关系的拓展。午火为阳火，代表活力与创造力，
                  适合在此阶段积极拓展事业，寻求突破。
                </p>
                <p className="text-gray-300">
                  此运对您的事业发展极为有利，尤其适合从事需要创意和表达能力的工作。
                  感情方面，易遇良缘；财运方面，收入稳定增长，但需防范投资风险。
                </p>
              </div>
            </div>
            
            {/* 流年运势 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">年</span>
                流年运势
              </h3>
              
              {/* 年份选择器 */}
              <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
                {[2022, 2023, 2024, 2025, 2026].map((year, index) => (
                  <button 
                    key={index}
                    className={`px-4 py-2 rounded-full ${
                      year === 2024 
                        ? 'bg-yellow-500 text-black font-bold' 
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {year}年
                  </button>
                ))}
              </div>
              
              {/* 本年总览 */}
              <div className="bg-gray-850 rounded-lg p-4 mb-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">甲辰</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">2024年 - 甲辰龙年</h4>
                    <p className="text-gray-400">木龙之年 - 五行属性：甲木、辰土</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">
                  2024年甲辰龙年，对您而言是"财源广进"之年。甲木生助命中之火，
                  辰土生助命中之金，五行相生，诸事顺遂。今年贵人运旺，
                  事业上有贵人相助，容易获得晋升或新的发展机会。
                </p>
                
                {/* 年度运势评分 */}
                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div className="bg-gray-800 p-3 rounded-lg text-center">
                    <h5 className="text-yellow-500 font-bold mb-2">总体运势</h5>
                    <div className="text-yellow-500 text-lg">★★★★☆</div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-lg text-center">
                    <h5 className="text-red-500 font-bold mb-2">事业运</h5>
                    <div className="text-red-500 text-lg">★★★★★</div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-lg text-center">
                    <h5 className="text-pink-500 font-bold mb-2">感情运</h5>
                    <div className="text-pink-500 text-lg">★★★☆☆</div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-lg text-center">
                    <h5 className="text-green-500 font-bold mb-2">财运</h5>
                    <div className="text-green-500 text-lg">★★★★☆</div>
                  </div>
                </div>
                
                {/* 吉神凶煞 */}
                <div className="flex space-x-4">
                  <div className="flex-1 bg-green-900 bg-opacity-30 p-3 rounded-lg border border-green-700">
                    <h5 className="text-green-500 font-bold mb-2 flex items-center">
                      <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-black text-xs mr-2">吉</span>
                      吉神
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-green-800 bg-opacity-50 rounded text-green-400 text-xs">天德</span>
                      <span className="px-2 py-1 bg-green-800 bg-opacity-50 rounded text-green-400 text-xs">月德</span>
                      <span className="px-2 py-1 bg-green-800 bg-opacity-50 rounded text-green-400 text-xs">天乙</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-red-900 bg-opacity-30 p-3 rounded-lg border border-red-700">
                    <h5 className="text-red-500 font-bold mb-2 flex items-center">
                      <span className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-black text-xs mr-2">凶</span>
                      凶煞
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-red-800 bg-opacity-50 rounded text-red-400 text-xs">五鬼</span>
                      <span className="px-2 py-1 bg-red-800 bg-opacity-50 rounded text-red-400 text-xs">岁破</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 月份运势 */}
              <h4 className="font-bold text-white mb-4">月份运势详解</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  { month: 1, luck: "上", color: "from-green-400 to-green-600" },
                  { month: 2, luck: "中", color: "from-yellow-400 to-yellow-600" },
                  { month: 3, luck: "上", color: "from-green-400 to-green-600" },
                  { month: 4, luck: "中", color: "from-yellow-400 to-yellow-600" },
                  { month: 5, luck: "下", color: "from-red-400 to-red-600" },
                  { month: 6, luck: "中", color: "from-yellow-400 to-yellow-600" },
                  { month: 7, luck: "上", color: "from-green-400 to-green-600" },
                  { month: 8, luck: "上", color: "from-green-400 to-green-600" },
                  { month: 9, luck: "中", color: "from-yellow-400 to-yellow-600" },
                  { month: 10, luck: "下", color: "from-red-400 to-red-600" },
                  { month: 11, luck: "中", color: "from-yellow-400 to-yellow-600" },
                  { month: 12, luck: "上", color: "from-green-400 to-green-600" }
                ].map((month, index) => (
                  <div key={index} className="bg-gray-750 p-3 rounded-lg flex items-center">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${month.color} flex items-center justify-center text-white font-bold mr-3`}>
                      {month.month}月
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h5 className="font-bold text-white mr-2">运势: </h5>
                        <span className={`px-2 py-0.5 rounded text-xs ${
                          month.luck === "上" ? "bg-green-900 text-green-400" :
                          month.luck === "中" ? "bg-yellow-900 text-yellow-400" :
                          "bg-red-900 text-red-400"
                        }`}>
                          {month.luck}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        {month.luck === "上" ? "诸事顺利，可大胆进取" :
                         month.luck === "中" ? "平稳发展，宜守不宜攻" :
                         "小心谨慎，避免冲动决策"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 流年建议 */}
              <div className="bg-gray-850 rounded-lg p-4 border border-gray-700">
                <h4 className="font-bold text-yellow-500 mb-3">流年开运指南</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-3 mt-1">宜</div>
                    <div className="flex-1">
                      <h5 className="font-bold text-white mb-2">2024年宜做事项</h5>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>宜在春季(2-4月)拓展人脉，寻求合作机会</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>宜在夏季(5-7月)稳固现有成果，避免冒进</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>宜在秋季(8-10月)投资理财，有望获得不错收益</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>宜在冬季(11-1月)总结规划，为来年做准备</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3 mt-1">忌</div>
                    <div className="flex-1">
                      <h5 className="font-bold text-white mb-2">2024年忌做事项</h5>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>忌在5月和10月做重大决策，易受小人干扰</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>忌在农历二月、八月进行搬家、装修等活动</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>忌高风险投资，尤其是在农历四月、九月</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>忌与属虎、属猴之人发生冲突，易引发不必要麻烦</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mr-3 mt-1">化</div>
                    <div className="flex-1">
                      <h5 className="font-bold text-white mb-2">2024年化解方法</h5>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">1.</span>
                          <span>佩戴龙形饰物或绿色玉石，增强运势</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">2.</span>
                          <span>在办公室或家中东南方位放置绿色植物，有助事业发展</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">3.</span>
                          <span>在农历五月初五、十月十五做善事，化解不利</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">4.</span>
                          <span>多穿绿色、黄色衣物，避免大面积黑色、白色</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 十年大运预测 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">预</span>
                十年大运预测
              </h3>
              
              <div className="space-y-6">
                {/* 时间轴 */}
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-600"></div>
                  
                  {[
                    { year: "2024-2025", title: "事业奠基期", desc: "贵人运旺盛，事业有突破", color: "bg-blue-500" },
                    { year: "2026-2027", title: "财富积累期", desc: "收入稳步增长，可考虑投资", color: "bg-green-500" },
                    { year: "2028-2029", title: "人际拓展期", desc: "人脉圈扩大，合作机会增多", color: "bg-yellow-500" },
                    { year: "2030-2031", title: "事业转型期", desc: "面临职业选择，需慎重决策", color: "bg-red-500" },
                    { year: "2032-2033", title: "稳定发展期", desc: "事业稳定，家庭和谐", color: "bg-purple-500" }
                  ].map((period, index) => (
                    <div key={index} className="relative pl-12 pb-8">
                      <div className={`absolute left-0 w-8 h-8 ${period.color} rounded-full flex items-center justify-center text-white font-bold z-10`}>
                        {index + 1}
                      </div>
                      <div className="bg-gray-750 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-bold text-white">{period.title}</h4>
                          <span className="text-sm text-gray-400">{period.year}</span>
                        </div>
                        <p className="text-gray-300">{period.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* 命理师建议 */}
                <div className="bg-gray-850 rounded-lg p-4 border border-gray-700">
                  <h4 className="font-bold text-yellow-500 mb-3">命理师十年规划建议</h4>
                  <p className="text-gray-300 mb-4">
                    根据您的八字命盘分析，未来十年是您人生的重要发展期。
                    丙午大运(20-30岁)对您而言是打基础的关键时期，而即将到来的丁未大运(30-40岁)
                    则是事业腾飞的黄金阶段。
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mr-3">近</div>
                      <div className="flex-1">
                        <h5 className="font-bold text-white mb-1">近期规划 (1-3年)</h5>
                        <p className="text-gray-300">
                          积极拓展人脉，提升专业技能，为事业发展打下坚实基础。
                          2025年有望获得重要晋升或职位调整，应做好准备。
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">中</div>
                      <div className="flex-1">
                        <h5 className="font-bold text-white mb-1">中期规划 (4-6年)</h5>
                        <p className="text-gray-300">
                          2028年是大运交接之年，需特别注意事业方向的选择。
                          此阶段适合稳健投资，为未来财务自由打基础。
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">远</div>
                      <div className="flex-1">
                        <h5 className="font-bold text-white mb-1">远期规划 (7-10年)</h5>
                        <p className="text-gray-300">
                          丁未大运中后期，事业将达到一个高峰，适合考虑创业或更高层次的职业发展。
                          同时应关注健康状况，保持工作与生活的平衡。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 事业页面 */}
        {activePage === 'career' && (
          <div className="space-y-6">
            {/* 事业总览 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">事</span>
                事业总览
              </h3>
              
              {/* 八字事业分析 */}
              <div className="bg-gray-850 rounded-lg p-4 mb-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold mr-4">偏印</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">八字格局：偏印格</h4>
                    <p className="text-gray-400">主聪明好学，思维敏捷，适合专业技术类工作</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">
                  您命局中偏印格显示，天生具有较强的学习能力和专业技术天赋。土金两旺，
                  显示做事稳重，善于规划，适合从事需要专业技能和长期积累的职业。
                  命中火相对偏弱，需要通过努力来增强个人魅力和领导能力。
                </p>
              </div>
              
              {/* 事业运势评估 */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-750 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-500 mb-3">优势特质</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-gray-300">分析能力强，思维缜密</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-gray-300">做事踏实，注重细节</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-gray-300">学习能力强，专业性高</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-gray-300">规划能力佳，善于总结</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-750 p-4 rounded-lg">
                  <h4 className="font-bold text-red-500 mb-3">发展建议</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span className="text-gray-300">加强沟通表达能力</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span className="text-gray-300">培养领导管理才能</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span className="text-gray-300">增强人际交往技巧</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span className="text-gray-300">提升创新思维能力</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* 适合职业 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">职</span>
                适合职业分析
              </h3>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-900 bg-opacity-30 p-4 rounded-lg border border-blue-700">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl mb-3">💻</div>
                  <h4 className="font-bold text-blue-400 mb-2">技术研发类</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• 软件工程师</li>
                    <li>• 系统架构师</li>
                    <li>• 数据分析师</li>
                    <li>• 研发工程师</li>
                  </ul>
                </div>
                
                <div className="bg-green-900 bg-opacity-30 p-4 rounded-lg border border-green-700">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl mb-3">📊</div>
                  <h4 className="font-bold text-green-400 mb-2">金融财务类</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• 金融分析师</li>
                    <li>• 投资顾问</li>
                    <li>• 财务规划师</li>
                    <li>• 风险控制师</li>
                  </ul>
                </div>
                
                <div className="bg-purple-900 bg-opacity-30 p-4 rounded-lg border border-purple-700">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl mb-3">🎓</div>
                  <h4 className="font-bold text-purple-400 mb-2">教育研究类</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• 教育培训师</li>
                    <li>• 研究员</li>
                    <li>• 技术讲师</li>
                    <li>• 专业顾问</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-850 rounded-lg p-4 border border-gray-700">
                <h4 className="font-bold text-yellow-500 mb-3">命理师点评</h4>
                <p className="text-gray-300 mb-3">
                  根据您的八字特点，最适合从事需要专业技术能力和分析思维的工作。
                  土金旺盛，显示您做事稳重，善于钻研，适合长期深耕某个专业领域。
                  建议在30岁前专注于技术能力的提升，30岁后可以逐步向管理方向发展。
                </p>
                <p className="text-gray-300">
                  特别提醒：2024-2025年是您事业的关键转折期，
                  适合在这段时间寻求职业提升或转型机会。
                </p>
              </div>
            </div>
            
            {/* 事业发展规划 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">规</span>
                事业发展规划
              </h3>
              
              {/* 发展阶段时间轴 */}
              <div className="relative mb-6">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-600"></div>
                
                {[
                  {
                    phase: "奠基期",
                    time: "25-30岁",
                    desc: "专注技术深耕，建立专业优势",
                    color: "bg-blue-500",
                    tasks: [
                      "深入学习专业技能",
                      "积累项目经验",
                      "建立行业人脉",
                      "获取相关证书"
                    ]
                  },
                  {
                    phase: "成长期",
                    time: "31-35岁",
                    desc: "开始团队管理，扩大影响力",
                    color: "bg-green-500",
                    tasks: [
                      "承担团队管理职责",
                      "提升领导能力",
                      "扩大项目规模",
                      "建立行业声誉"
                    ]
                  },
                  {
                    phase: "收获期",
                    time: "36-40岁",
                    desc: "事业走向成熟，实现价值突破",
                    color: "bg-yellow-500",
                    tasks: [
                      "担任高级管理职位",
                      "把握创业机会",
                      "实现财务自由",
                      "建立个人品牌"
                    ]
                  }
                ].map((stage, index) => (
                  <div key={index} className="relative pl-12 pb-8">
                    <div className={`absolute left-0 w-8 h-8 ${stage.color} rounded-full flex items-center justify-center text-white font-bold z-10`}>
                      {index + 1}
                    </div>
                    <div className="bg-gray-750 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-white">{stage.phase}</h4>
                        <span className="text-sm text-gray-400">{stage.time}</span>
                      </div>
                      <p className="text-gray-300 mb-3">{stage.desc}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {stage.tasks.map((task, i) => (
                          <div key={i} className="flex items-center">
                            <span className={`w-2 h-2 ${stage.color} rounded-full mr-2`}></span>
                            <span className="text-gray-300 text-sm">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 开运建议 */}
              <div className="bg-gray-850 rounded-lg p-4 border border-gray-700">
                <h4 className="font-bold text-yellow-500 mb-3">事业开运建议</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold text-white mb-2">趋吉避凶</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>办公位宜坐北朝南，利于事业发展</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>宜与金土属相之人合作，能相互促进</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>避免在农历二月、八月做重要决策</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-white mb-2">开运方法</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">1.</span>
                        <span>佩戴黄水晶或黄玉，增强事业运</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">2.</span>
                        <span>在办公桌摆放文昌塔，助力学习进步</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">3.</span>
                        <span>每月初一、十五行善积德，增添贵人</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 婚恋页面 */}
        {activePage === 'love' && (
          <div className="space-y-6">
            {/* 姻缘总览 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">姻</span>
                姻缘总览
              </h3>
              
              {/* 八字姻缘分析 */}
              <div className="bg-gray-850 rounded-lg p-4 mb-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">桃花</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">桃花格局：偏印桃花</h4>
                    <p className="text-gray-400">主感情细腻，重精神契合，晚婚较宜</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">
                  您命局中偏印桃花格，显示在感情上较为理性，不会轻易被外表吸引。
                  土金两旺，代表重视感情的实质和长久发展。命中火相对偏弱，
                  显示在感情表达上可能略显含蓄，需要多加主动。
                </p>
              </div>
              
              {/* 姻缘运势评估 */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-750 p-4 rounded-lg">
                  <h4 className="font-bold text-pink-500 mb-3">感情特质</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                      <span className="text-gray-300">重视精神契合</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                      <span className="text-gray-300">感情专一稳重</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                      <span className="text-gray-300">追求长久关系</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                      <span className="text-gray-300">责任感较强</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-750 p-4 rounded-lg">
                  <h4 className="font-bold text-red-500 mb-3">注意事项</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span className="text-gray-300">表达方式需加强</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span className="text-gray-300">应增加生活情趣</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span className="text-gray-300">避免过于理性</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span className="text-gray-300">注意情感投入</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* 桃花运势 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">缘</span>
                桃花运势
              </h3>
              
              {/* 年度桃花运势图 */}
              <div className="relative w-full h-64 mb-6 bg-gray-850 rounded-lg p-4">
                <h4 className="font-bold text-pink-500 mb-4">2024年桃花运势曲线</h4>
                <div className="relative h-40">
                  {/* Y轴标签 */}
                  <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-gray-400">
                    <span>旺</span>
                    <span>中</span>
                    <span>弱</span>
                  </div>
                  
                  {/* 运势曲线 */}
                  <div className="absolute left-10 right-0 top-0 bottom-0">
                    <svg className="absolute inset-0 w-full h-full">
                      <defs>
                        <linearGradient id="loveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#EC4899" />
                          <stop offset="50%" stopColor="#DB2777" />
                          <stop offset="100%" stopColor="#BE185D" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M0,60 C50,40 100,80 150,60 C200,40 250,90 300,70 C350,50 400,80 450,60" 
                        fill="none" 
                        stroke="url(#loveGradient)" 
                        strokeWidth="3"
                      />
                    </svg>
                    
                    {/* 重要时间点标记 */}
                    <div className="absolute top-[40px] left-[100px] w-4 h-4 bg-pink-500 rounded-full transform -translate-x-2 -translate-y-2"></div>
                    <div className="absolute top-[90px] left-[250px] w-4 h-4 bg-pink-500 rounded-full transform -translate-x-2 -translate-y-2"></div>
                    <div className="absolute top-[60px] left-[450px] w-4 h-4 bg-pink-500 rounded-full transform -translate-x-2 -translate-y-2"></div>
                  </div>
                  
                  {/* X轴标签 */}
                  <div className="absolute left-10 right-0 bottom-[-20px] flex justify-between text-xs text-gray-400">
                    <span>春</span>
                    <span>夏</span>
                    <span>秋</span>
                    <span>冬</span>
                  </div>
                </div>
              </div>
              
              {/* 月份桃花运势 */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { season: "春季", months: ["2月", "3月", "4月"], level: "旺", color: "pink" },
                  { season: "夏季", months: ["5月", "6月", "7月"], level: "中", color: "yellow" },
                  { season: "秋季", months: ["8月", "9月", "10月"], level: "旺", color: "pink" },
                  { season: "冬季", months: ["11月", "12月", "1月"], level: "中", color: "yellow" }
                ].map((season, index) => (
                  <div key={index} className={`bg-${season.color}-900 bg-opacity-30 p-4 rounded-lg border border-${season.color}-700`}>
                    <h4 className={`font-bold text-${season.color}-400 mb-2`}>{season.season}</h4>
                    <div className="space-y-2">
                      {season.months.map((month, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-gray-300">{month}</span>
                          <span className={`text-${season.color}-400`}>
                            {'★'.repeat(season.level === "旺" ? 5 : 3)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 理想伴侣 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">配</span>
                理想伴侣
              </h3>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* 相配属性 */}
                <div className="bg-gray-850 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-bold text-green-500 mb-3 flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2 text-black text-xs">宜</span>
                    相配属性
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <div>
                        <span className="text-white font-bold">五行：</span>
                        <span className="text-gray-300">火旺或木旺之人，可互补平衡</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <div>
                        <span className="text-white font-bold">性格：</span>
                        <span className="text-gray-300">开朗活泼，善于表达，富有创造力</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <div>
                        <span className="text-white font-bold">生肖：</span>
                        <span className="text-gray-300">属马、属羊、属鸡者较为相配</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* 不适配属性 */}
                <div className="bg-gray-850 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-bold text-red-500 mb-3 flex items-center">
                    <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-2 text-black text-xs">忌</span>
                    不适配属性
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <div>
                        <span className="text-white font-bold">五行：</span>
                        <span className="text-gray-300">土旺或金旺之人，易产生矛盾</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <div>
                        <span className="text-white font-bold">性格：</span>
                        <span className="text-gray-300">过于保守，缺乏生活情趣之人</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <div>
                        <span className="text-white font-bold">生肖：</span>
                        <span className="text-gray-300">属虎、属猴者易有冲突</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* 姻缘开运建议 */}
              <div className="bg-gray-850 rounded-lg p-4 border border-gray-700">
                <h4 className="font-bold text-yellow-500 mb-3">姻缘开运建议</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold text-white mb-2">桃花开运</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">1.</span>
                        <span>佩戴红色或粉色水晶，增进桃花运</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">2.</span>
                        <span>在房间东南方位摆放鲜花，招引良缘</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">3.</span>
                        <span>农历初一、十五诚心祈福，助缘分早日降临</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-white mb-2">感情建议</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>主动参加社交活动，扩大交友圈</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>学习表达感情，增进情感交流</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>保持积极乐观的心态，提升个人魅力</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 财富页面 */}
        {activePage === 'wealth' && (
          <div className="space-y-6">
            {/* 财富总览 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">财</span>
                财富总览
              </h3>
              
              {/* 八字财运分析 */}
              <div className="bg-gray-850 rounded-lg p-4 mb-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold mr-4">偏财</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">财运格局：偏财格</h4>
                    <p className="text-gray-400">主财运平稳，适合投资理财，中年后财运渐旺</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">
                  您命局中偏财格显示，财运以稳健为主。土金两旺，
                  显示理财能力较强，适合长期投资。命中火相对偏弱，
                  显示在投资决策上偏于保守，建议适当提升风险承受能力。
                </p>
              </div>
              
              {/* 五行财运分析 */}
              <div className="grid grid-cols-5 gap-4 mb-6">
                {[
                  { element: "金", level: 85, color: "yellow", desc: "代表正财，基础收入稳定" },
                  { element: "木", level: 45, color: "green", desc: "代表偏财，投资收益一般" },
                  { element: "水", level: 60, color: "blue", desc: "代表智慧，理财能力较强" },
                  { element: "火", level: 30, color: "red", desc: "代表运势，投资魄力欠佳" },
                  { element: "土", level: 75, color: "yellow", desc: "代表根基，财富积累扎实" }
                ].map((item, index) => (
                  <div key={index} className={`bg-${item.color}-900 bg-opacity-30 p-4 rounded-lg border border-${item.color}-700`}>
                    <div className={`w-12 h-12 bg-${item.color}-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2`}>
                      {item.element}
                    </div>
                    <div className="text-center mb-2">
                      <div className="h-20 w-4 bg-gray-700 rounded-full mx-auto relative">
                        <div 
                          className={`absolute bottom-0 left-0 right-0 bg-${item.color}-500 rounded-full`}
                          style={{ height: `${item.level}%` }}
                        ></div>
                      </div>
                      <span className={`text-${item.color}-400 text-sm mt-1 block`}>{item.level}%</span>
                    </div>
                    <p className="text-gray-300 text-xs text-center">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 财运流年分析 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">运</span>
                2024年财运分析
              </h3>
              
              {/* 月度财运图表 */}
              <div className="relative w-full h-64 mb-6 bg-gray-850 rounded-lg p-4">
                <h4 className="font-bold text-yellow-500 mb-4">月度财运走势</h4>
                <div className="relative h-40">
                  {/* Y轴标签 */}
                  <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-gray-400">
                    <span>旺</span>
                    <span>中</span>
                    <span>弱</span>
                  </div>
                  
                  {/* 财运曲线 */}
                  <div className="absolute left-10 right-0 top-0 bottom-0">
                    <svg className="absolute inset-0 w-full h-full">
                      <defs>
                        <linearGradient id="wealthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#FCD34D" />
                          <stop offset="50%" stopColor="#F59E0B" />
                          <stop offset="100%" stopColor="#D97706" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M0,70 C50,50 100,90 150,60 C200,30 250,80 300,50 C350,20 400,60 450,40" 
                        fill="none" 
                        stroke="url(#wealthGradient)" 
                        strokeWidth="3"
                      />
                    </svg>
                    
                    {/* 关键点标记 */}
                    <div className="absolute top-[50px] left-[100px] w-4 h-4 bg-yellow-500 rounded-full transform -translate-x-2 -translate-y-2"></div>
                    <div className="absolute top-[80px] left-[250px] w-4 h-4 bg-yellow-500 rounded-full transform -translate-x-2 -translate-y-2"></div>
                    <div className="absolute top-[40px] left-[400px] w-4 h-4 bg-yellow-500 rounded-full transform -translate-x-2 -translate-y-2"></div>
                  </div>
                  
                  {/* X轴标签 */}
                  <div className="absolute left-10 right-0 bottom-[-20px] flex justify-between text-xs text-gray-400">
                    <span>1月</span>
                    <span>4月</span>
                    <span>8月</span>
                    <span>12月</span>
                  </div>
                </div>
              </div>
              
              {/* 季度财运分析 */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { season: "春季", months: ["正月", "二月", "三月"], level: "旺", color: "green", desc: "适合开展新项目" },
                  { season: "夏季", months: ["四月", "五月", "六月"], level: "中", color: "red", desc: "稳健发展为主" },
                  { season: "秋季", months: ["七月", "八月", "九月"], level: "旺", color: "yellow", desc: "财运最旺时期" },
                  { season: "冬季", months: ["十月", "冬月", "腊月"], level: "平", color: "blue", desc: "注意资金管理" }
                ].map((season, index) => (
                  <div key={index} className={`bg-${season.color}-900 bg-opacity-30 p-4 rounded-lg border border-${season.color}-700`}>
                    <h4 className={`font-bold text-${season.color}-400 mb-2`}>{season.season}</h4>
                    <div className="space-y-2">
                      {season.months.map((month, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-gray-300">{month}</span>
                          <span className={`text-${season.color}-400`}>
                            {'★'.repeat(season.level === "旺" ? 5 : season.level === "中" ? 4 : 3)}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className={`text-${season.color}-400 text-sm mt-2`}>{season.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 投资理财建议 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">策</span>
                投资理财策略
              </h3>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  {
                    title: "稳健投资",
                    icon: "💰",
                    color: "blue",
                    items: ["定期存款", "国债", "保本理财", "优质债券"]
                  },
                  {
                    title: "成长投资",
                    icon: "📈",
                    color: "green",
                    items: ["优质股票", "基金组合", "保险产品", "REITs"]
                  },
                  {
                    title: "机会投资",
                    icon: "✨",
                    color: "yellow",
                    items: ["创业项目", "新兴产业", "贵金属", "收藏品"]
                  }
                ].map((category, index) => (
                  <div key={index} className={`bg-${category.color}-900 bg-opacity-30 p-4 rounded-lg border border-${category.color}-700`}>
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-2">{category.icon}</span>
                      <h4 className={`font-bold text-${category.color}-400`}>{category.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className={`w-2 h-2 bg-${category.color}-500 rounded-full mr-2`}></span>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              {/* 开运建议 */}
              <div className="bg-gray-850 rounded-lg p-4 border border-gray-700">
                <h4 className="font-bold text-yellow-500 mb-3">财运开运建议</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold text-white mb-2">趋吉避凶</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>宜在春、秋两季开展重要投资</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>农历初一、十五适合签订合同</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>农历七月、十月避免大额投资</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-white mb-2">开运方法</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">1.</span>
                        <span>在办公桌东南方位摆放招财树</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">2.</span>
                        <span>佩戴黄水晶或黄玉，增强财运</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">3.</span>
                        <span>每月初一、十五诵读财神经</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 理财规划 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">规</span>
                财富规划建议
              </h3>
              
              <div className="relative mb-6">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-600"></div>
                
                {[
                  {
                    phase: "基础积累期",
                    time: "25-30岁",
                    desc: "建立理财意识，开始系统投资",
                    color: "bg-blue-500",
                    tasks: [
                      "制定月度储蓄计划",
                      "学习投资理财知识",
                      "购买基础保险",
                      "尝试稳健型理财产品"
                    ]
                  },
                  {
                    phase: "稳健成长期",
                    time: "31-35岁",
                    desc: "扩大投资规模，优化资产配置",
                    color: "bg-green-500",
                    tasks: [
                      "增加投资品类",
                      "配置优质基金",
                      "考虑房产投资",
                      "建立应急基金"
                    ]
                  },
                  {
                    phase: "财富收获期",
                    time: "36-40岁",
                    desc: "实现资产增值，为未来做准备",
                    color: "bg-yellow-500",
                    tasks: [
                      "开展多元化投资",
                      "规划子女教育基金",
                      "考虑养老投资",
                      "关注税务筹划"
                    ]
                  }
                ].map((stage, index) => (
                  <div key={index} className="relative pl-12 pb-8">
                    <div className={`absolute left-0 w-8 h-8 ${stage.color} rounded-full flex items-center justify-center text-white font-bold z-10`}>
                      {index + 1}
                    </div>
                    <div className="bg-gray-750 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-white">{stage.phase}</h4>
                        <span className="text-sm text-gray-400">{stage.time}</span>
                      </div>
                      <p className="text-gray-300 mb-3">{stage.desc}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {stage.tasks.map((task, i) => (
                          <div key={i} className="flex items-center">
                            <span className={`w-2 h-2 ${stage.color} rounded-full mr-2`}></span>
                            <span className="text-gray-300 text-sm">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
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