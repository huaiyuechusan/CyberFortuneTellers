import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import DestinyAnalysis from './pages/DestinyAnalysis';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<DestinyAnalysis />} />
          <Route path="/basic-info" element={<DestinyAnalysis />} />
          {/* 添加其他路由 */}
        </Routes>
      </div>
    </Router>
  );
};

export default App; 