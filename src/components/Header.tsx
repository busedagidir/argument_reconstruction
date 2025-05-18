import React from 'react';
import { BookOpen } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-semibold text-gray-800">ArgumentCraft</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-150">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-150">
                Examples
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-150">
                Resources
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};