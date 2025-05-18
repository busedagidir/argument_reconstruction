import React from 'react';
import { Hero } from '../components/Hero';
import { ArgumentTransformer } from '../components/ArgumentTransformer';
import { ExampleArguments } from '../components/ExampleArguments';
import { FeatureHighlights } from '../components/FeatureHighlights';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 py-8">
      <Hero />
      <ArgumentTransformer />
      <ExampleArguments />
      <FeatureHighlights />
    </div>
  );
};