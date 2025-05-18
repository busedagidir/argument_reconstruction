import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl overflow-hidden shadow-lg">
        <div className="max-w-3xl mx-auto py-16 px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Transform Weak Arguments Into Compelling Reasoning
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Identify flaws in reasoning, strengthen your position, and craft persuasive arguments
            with our intelligent transformation system.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-300 flex items-center justify-center">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300">
              View Examples
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};