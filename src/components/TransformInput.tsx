import React from 'react';
import { RefreshCw, Wand2, FileText } from 'lucide-react';

interface TransformInputProps {
  value: string;
  onChange: (value: string) => void;
  onTransform: () => void;
  onReset: () => void;
  onLoadExample: () => void;
  isLoading: boolean;
}

export const TransformInput: React.FC<TransformInputProps> = ({
  value,
  onChange,
  onTransform,
  onReset,
  onLoadExample,
  isLoading
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Ineffective Argument</h3>
        <div className="flex space-x-2">
          <button
            onClick={onLoadExample}
            className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
            title="Load example"
          >
            <FileText className="h-5 w-5" />
          </button>
          <button
            onClick={onReset}
            className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
            title="Reset"
          >
            <RefreshCw className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your argument here. For example: 'I think climate change might be real because it feels hotter these days.'"
        className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-none"
      />
      
      <button
        onClick={onTransform}
        disabled={!value.trim() || isLoading}
        className={`mt-4 w-full py-3 px-4 flex items-center justify-center rounded-lg font-medium ${
          !value.trim() || isLoading
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700 transition duration-200'
        }`}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Transforming...
          </>
        ) : (
          <>
            <Wand2 className="h-5 w-5 mr-2" />
            Transform Argument
          </>
        )}
      </button>
    </div>
  );
};