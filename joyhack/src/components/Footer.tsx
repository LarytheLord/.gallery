// components/Footer.tsx
'use client'

import { Code, Github, Twitter, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

const footerSections = [
  {
    title: 'Platform',
    links: ['Features', 'Pricing', 'Documentation', 'API Reference']
  },
  {
    title: 'Resources',
    links: ['Blog', 'Tutorials', 'Showcase', 'Support']
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Contact', 'Partners']
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'Cookies']
  }
]

const socialLinks = [
  { Icon: Github, href: '#' },
  { Icon: Twitter, href: '#' },
  { Icon: Linkedin, href: '#' }
]

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">CodeCommunity</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-sm">
              Join our community of developers and build amazing things together.
              Learn, share, and grow with us.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} CodeCommunity. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}