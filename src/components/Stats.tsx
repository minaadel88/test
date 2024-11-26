import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const stats = [
  { id: 1, name: 'Active Users', value: '50K+' },
  { id: 2, name: 'Data Points Processed', value: '1B+' },
  { id: 3, name: 'Enterprise Clients', value: '500+' },
  { id: 4, name: 'Countries', value: '150+' },
];

export default function Stats() {
  return (
    <div className="relative bg-black py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black/10 to-blue-900/20 opacity-50" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col rounded-2xl bg-gray-900/50 backdrop-blur-lg p-8 text-center border border-gray-800"
              >
                <dt className="text-sm font-medium text-gray-400">{stat.name}</dt>
                <dd className="mt-2 text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </AnimatedSection>
      </div>
    </div>
  );
}