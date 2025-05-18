import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ArgumentCraft</h3>
            <p className="text-sm">
              Transforming ineffective arguments into compelling, logical reasoning.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition duration-150">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-150">
                  Learning Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-150">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">
              Have questions or feedback? <br />
              <a href="#" className="text-blue-400 hover:text-blue-300 transition duration-150">
                Get in touch
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
          <p>© {new Date().getFullYear()} ArgumentCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};