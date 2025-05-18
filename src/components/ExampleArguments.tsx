import React, { useState } from 'react';
import { exampleArguments } from '../data/exampleArguments';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ExampleArguments: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrevious = () => {
    setCurrentIndex(prev => 
      prev === 0 ? exampleArguments.length - 1 : prev - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => 
      prev === exampleArguments.length - 1 ? 0 : prev + 1
    );
  };
  
  const currentExample = exampleArguments[currentIndex];
  
  return (
    <section className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Example Transformations</h2>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Example {currentIndex + 1} of {exampleArguments.length}
              </span>
              <div className="flex space-x-2">
                <button 
                  onClick={handlePrevious}
                  className="p-2 rounded-full hover:bg-gray-100 transition duration-200"
                  aria-label="Previous example"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button 
                  onClick={handleNext}
                  className="p-2 rounded-full hover:bg-gray-100 transition duration-200"
                  aria-label="Next example"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-3">Ineffective Argument</h3>
                <div className="p-4 bg-red-50 rounded-lg border border-red-100 h-48 overflow-auto">
                  <p className="text-gray-800">{currentExample.ineffective}</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-3">Effective Argument</h3>
                <div className="p-4 bg-green-50 rounded-lg border border-green-100 h-48 overflow-auto">
                  <p className="text-gray-800">{currentExample.effective}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Improvements</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentExample.analysis.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span className="text-gray-700">{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};