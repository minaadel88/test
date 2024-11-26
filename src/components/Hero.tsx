import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, Zap, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-purple-50 to-white pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 transform">
          <div className="h-[800px] w-[800px] rounded-full bg-gradient-to-r from-purple-200/30 to-blue-200/30 blur-3xl" />
        </div>
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="sm:text-center md:mx-auto lg:col-span-6 lg:text-left"
            >
              <h1>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="block text-base font-semibold text-purple-600"
                >
                  Revolutionizing Data Analytics
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl"
                >
                  <span className="block gradient-text">Transform Your</span>
                  <span className="block gradient-text">Data Into Insights</span>
                </motion.span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
              >
                Unlock the power of your data with our AI-driven analytics platform. 
                Make smarter decisions and drive growth with real-time insights.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4"
              >
                <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 text-white hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-purple-600 border-2 border-purple-100 hover:border-purple-200 transition-all">
                  Watch Demo
                </button>
              </motion.div>

              <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6">
                {[
                  { icon: BarChart2, text: "Real-time Analytics" },
                  { icon: Zap, text: "Lightning Fast" },
                  { icon: Shield, text: "Enterprise Security" }
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="rounded-full bg-purple-100 p-3">
                      <item.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Analytics Dashboard"
                  className="w-full rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}