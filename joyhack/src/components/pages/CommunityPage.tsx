import React from 'react';
import { motion } from 'framer-motion';
import { Search, Share2, MessageSquare } from 'lucide-react';

export function CommunityPage() {
  const discussions = [
    {
      title: "Best practices for React performance optimization",
      author: "Sarah Chen",
      replies: 45,
      likes: 128,
      tags: ["React", "Performance"]
    },
    {
      title: "Getting started with TypeScript in 2024",
      author: "Michael Johnson",
      replies: 32,
      likes: 95,
      tags: ["TypeScript", "Beginners"]
    },
    {
      title: "Machine Learning project ideas for beginners",
      author: "David Kim",
      replies: 67,
      likes: 156,
      tags: ["ML", "Projects"]
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
          <h1 className="text-4xl font-bold mb-4">Community Discussions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Share knowledge, ask questions, and help others</p>
        </motion.div>

        <div className="flex justify-between items-center mb-8">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search discussions..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800"
              />
            </div>
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
            Start Discussion
          </button>
        </div>

        <div className="space-y-6">
          {discussions.map((discussion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{discussion.title}</h3>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                    <MessageSquare className="w-4 h-4" />
                    {discussion.replies}
                  </button>
                  <button className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                <span>Posted by {discussion.author}</span>
                <span>•</span>
                <span>{discussion.likes} likes</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {discussion.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}