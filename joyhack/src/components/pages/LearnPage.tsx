import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export function LearnPage() {
  const courses = [
    {
      title: "Web Development Fundamentals",
      level: "Beginner",
      duration: "8 weeks",
      description: "Master the basics of HTML, CSS, and JavaScript",
      modules: 12,
      students: 2500
    },
    {
      title: "Advanced React Patterns",
      level: "Advanced",
      duration: "6 weeks",
      description: "Learn advanced React patterns and best practices",
      modules: 8,
      students: 1800
    },
    {
      title: "Full Stack Development",
      level: "Intermediate",
      duration: "10 weeks",
      description: "Build complete web applications from front to back",
      modules: 15,
      students: 2100
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
          <h1 className="text-4xl font-bold mb-4">Learn & Grow</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Structured learning paths to advance your skills</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-2 text-primary mb-4">
                <BookOpen className="w-5 h-5" />
                <span className="font-semibold">{course.level}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>{course.duration}</span>
                <span>{course.modules} modules</span>
                <span>{course.students} students</span>
              </div>
              <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                Start Learning
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}