import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Brain, Gauge, Lock, Globe, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const features = [
  {
    name: 'Advanced Analytics',
    description: 'Get deep insights into your data with our advanced analytics tools.',
    icon: LineChart,
  },
  {
    name: 'AI-Powered',
    description: 'Leverage machine learning for predictive analytics and insights.',
    icon: Brain,
  },
  {
    name: 'Real-time Processing',
    description: 'Process and analyze data in real-time for immediate insights.',
    icon: Gauge,
  },
  {
    name: 'Enterprise Security',
    description: 'Bank-grade security to keep your data safe and compliant.',
    icon: Lock,
  },
  {
    name: 'Global Scale',
    description: 'Scale your analytics across regions with our global infrastructure.',
    icon: Globe,
  },
  {
    name: 'Lightning Fast',
    description: 'Blazing fast performance with our optimized processing engine.',
    icon: Zap,
  },
];

export default function Features() {
  return (
    <div id="features" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-black/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <span className="text-base font-semibold text-purple-400">Features</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to analyze your data
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Powerful features to help you make better decisions with your data.
          </p>
        </AnimatedSection>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <AnimatedSection key={feature.name}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8 shadow-lg hover:shadow-purple-500/5 transition-all backdrop-blur-sm"
                >
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="ml-4 text-xl font-medium text-white">{feature.name}</h3>
                  </div>
                  <p className="mt-4 text-gray-400">{feature.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}