// src/components/pages/ClubsPage.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight, Search, Filter } from 'lucide-react';

export function ClubsPage() {
  const clubs = [
    {
      name: "Web Development Club",
      members: 1250,
      description: "A community of passionate web developers building the future of the web",
      tags: ["JavaScript", "React", "Node.js"]
    },
    {
      name: "AI/ML Study Group",
      members: 890,
      description: "Explore the fascinating world of artificial intelligence and machine learning",
      tags: ["Python", "TensorFlow", "PyTorch"]
    },
    {
      name: "Mobile App Developers",
      members: 750,
      description: "Creating innovative mobile applications for iOS and Android",
      tags: ["Flutter", "React Native", "Swift"]
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Developer Clubs</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Join specialized communities and grow together</p>
        </motion.div>

        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search clubs..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800"
              />
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{club.name}</h3>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{club.members}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{club.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {club.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
                Join Club
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}