import React from 'react';
import { Book, Cpu, Award, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="h-10 w-10 text-blue-600" />,
    title: 'Smart Analysis',
    description: 'Our system automatically identifies logical fallacies, weak evidence, and structural issues in your arguments.'
  },
  {
    icon: <Book className="h-10 w-10 text-teal-600" />,
    title: 'Learning Resources',
    description: 'Access a comprehensive library of guides on argumentation, logical fallacies, and persuasive techniques.'
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-purple-600" />,
    title: 'Progress Tracking',
    description: 'Monitor your improvement over time with detailed metrics and feedback on your argument quality.'
  },
  {
    icon: <Award className="h-10 w-10 text-amber-600" />,
    title: 'Expert Techniques',
    description: 'Learn the same strategies used by professional debaters, writers, and critical thinkers.'
  }
];

export const FeatureHighlights: React.FC = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};