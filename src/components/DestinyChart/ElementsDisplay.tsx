import React from 'react';
import { ElementAnalysis } from '../../types';

interface ElementsDisplayProps {
  elements: ElementAnalysis;
}

const ElementsDisplay: React.FC<ElementsDisplayProps> = ({ elements }) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-gray-800 rounded-lg">
      {['年柱', '月柱', '日柱', '时柱'].map((pillar, index) => (
        <div key={index} className="text-center p-4 border border-gray-700 rounded">
          <div className="text-lg font-bold text-yellow-500 mb-2">{pillar}</div>
          <div className="space-y-2">
            <div className="text-white">
              {index === 0 && elements.yearPillar}
              {index === 1 && elements.monthPillar}
              {index === 2 && elements.dayPillar}
              {index === 3 && elements.hourPillar}
            </div>
            <div className="text-gray-400 text-sm">
              {elements.elements[index].heaven} - {elements.elements[index].earth}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ElementsDisplay; 