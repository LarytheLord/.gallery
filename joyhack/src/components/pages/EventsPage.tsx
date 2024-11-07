import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users } from 'lucide-react';

export function EventsPage() {
  const events = [
    {
      title: "Global Hackathon 2024",
      date: "June 15-17, 2024",
      type: "Virtual",
      description: "48-hour coding challenge with developers worldwide",
      attendees: 1500
    },
    {
      title: "Web Development Workshop",
      date: "May 20, 2024",
      type: "Hybrid",
      description: "Learn modern web development practices and tools",
      attendees: 800
    },
    {
      title: "Tech Conference 2024",
      date: "July 5-7, 2024",
      type: "In-Person",
      description: "Three days of talks, workshops, and networking",
      attendees: 2000
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
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Connect, learn, and grow with global tech events</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">{event.date}</span>
                </div>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                  {event.type}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Users className="w-4 h-4" />
                  <span>{event.attendees} attending</span>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}