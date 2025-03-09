import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: "👤", label: "基本信息", path: "/basic-info" },
    { icon: "📋", label: "个性报告", path: "/personal-report" },
    { icon: "🌟", label: "人生简况", path: "/life-overview" },
    { icon: "📈", label: "大运流年", path: "/destiny-timeline" },
    { icon: "💼", label: "事业", path: "/career" },
    { icon: "💕", label: "婚恋", path: "/relationship" },
    { icon: "💰", label: "财富", path: "/wealth" },
  ];

  return (
    <div className="w-64 bg-gray-900 h-screen fixed left-0 top-0 text-white">
      <div className="p-4">
        <img src="../../logo.png" alt="天机" className="h-12 mb-8" />
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors
                ${location.pathname === item.path 
                  ? 'bg-gray-800 text-yellow-500' 
                  : 'hover:bg-gray-800'}`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar; 