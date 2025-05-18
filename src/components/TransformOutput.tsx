import React from 'react';
import { Check, Copy } from 'lucide-react';

interface TransformOutputProps {
  output: string;
}

export const TransformOutput: React.FC<TransformOutputProps> = ({ output }) => {
  const [copied, setCopied] = React.useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Effective Argument</h3>
        <button
          onClick={handleCopy}
          className="p-2 text-gray-500 hover:text-green-600 transition-colors flex items-center gap-1"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <Check className="h-5 w-5 text-green-600" />
              <span className="text-sm text-green-600">Copied!</span>
            </>
          ) : (
            <Copy className="h-5 w-5" />
          )}
        </button>
      </div>
      
      <div className="w-full h-64 p-4 border border-gray-300 rounded-lg bg-green-50 overflow-auto">
        <p className="text-gray-800 whitespace-pre-line">{output}</p>
      </div>
    </div>
  );
};