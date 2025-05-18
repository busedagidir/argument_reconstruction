import React, { useState } from 'react';
import { AlertCircle, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface TransformAnalysisProps {
  analysis: {
    weaknesses: string[];
    improvements: string[];
  };
}

export const TransformAnalysis: React.FC<TransformAnalysisProps> = ({ analysis }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div 
        className="flex justify-between items-center mb-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-semibold text-gray-800">Analysis</h3>
        <button className="p-1 text-gray-500 hover:text-blue-600 transition-colors">
          {isExpanded ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
      </div>
      
      {isExpanded && (
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium text-red-600 flex items-center gap-1 mb-2">
              <AlertCircle className="h-4 w-4" />
              Identified Weaknesses
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
              {analysis.weaknesses.map((weakness, index) => (
                <li key={index}>{weakness}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-medium text-green-600 flex items-center gap-1 mb-2">
              <CheckCircle className="h-4 w-4" />
              Improvements Made
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
              {analysis.improvements.map((improvement, index) => (
                <li key={index}>{improvement}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};