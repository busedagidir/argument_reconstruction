import React, { useState } from 'react';
import { TransformInput } from './TransformInput';
import { TransformOutput } from './TransformOutput';
import { TransformAnalysis } from './TransformAnalysis';
import { exampleArguments } from '../data/exampleArguments';

export const ArgumentTransformer: React.FC = () => {
  const [inputArgument, setInputArgument] = useState('');
  const [outputArgument, setOutputArgument] = useState('');
  const [analysis, setAnalysis] = useState<null | any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTransform = () => {
    if (!inputArgument.trim()) return;
    
    setIsLoading(true);
    
    // Simulating transformation process
    setTimeout(() => {
      // For demo purposes, we'll use a simple transformation based on the examples
      const matchingExample = exampleArguments.find(ex => 
        ex.ineffective.toLowerCase().includes(inputArgument.toLowerCase().substring(0, 10))
      );
      
      if (matchingExample) {
        setOutputArgument(matchingExample.effective);
        setAnalysis(matchingExample.analysis);
      } else {
        // Default transformation for demo
        setOutputArgument(
          inputArgument
            .replace(/I think/gi, 'Research shows')
            .replace(/maybe/gi, 'evidence suggests')
            .replace(/in my opinion/gi, 'According to experts')
        );
        
        setAnalysis({
          weaknesses: [
            'Lacks supporting evidence',
            'Uses subjective language',
            'Contains logical fallacies',
            'Missing clear structure'
          ],
          improvements: [
            'Added empirical evidence',
            'Removed subjective qualifiers',
            'Strengthened logical flow',
            'Added clear conclusion'
          ]
        });
      }
      
      setIsLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setInputArgument('');
    setOutputArgument('');
    setAnalysis(null);
  };

  const handleLoadExample = () => {
    const randomExample = exampleArguments[Math.floor(Math.random() * exampleArguments.length)];
    setInputArgument(randomExample.ineffective);
  };

  return (
    <section id="transformer" className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Transform Your Argument</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TransformInput 
            value={inputArgument}
            onChange={setInputArgument}
            onTransform={handleTransform}
            onReset={handleReset}
            onLoadExample={handleLoadExample}
            isLoading={isLoading}
          />
          
          <div className="space-y-8">
            {outputArgument && (
              <TransformOutput output={outputArgument} />
            )}
            
            {analysis && (
              <TransformAnalysis analysis={analysis} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};