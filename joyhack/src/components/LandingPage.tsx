import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowRight, Users, Code, Globe, Zap } from 'lucide-react'
import  ParticleField  from '../components/ParticleField'
import  FeatureCard  from '../components/FeatureCard'

const features = [
  {
    icon: Users,
    title: 'Join the Community',
    description: 'Connect with fellow developers, share ideas, and collaborate on projects.'
  },
  {
    icon: Code,
    title: 'Learn & Build',
    description: 'Access resources, tutorials, and hands-on projects to improve your skills.'
  },
  {
    icon: Globe,
    title: 'Global Events',
    description: 'Participate in hackathons, workshops, and coding challenges worldwide.'
  },
  {
    icon: Zap,
    title: 'AI-Powered Learning',
    description: 'Leverage AI tools to enhance your coding skills and accelerate your learning journey.'
  }
]

export function LandingPage() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      <div className="relative">
        <ParticleField />
        
        <main className="pt-24 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4 text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover the{' '}
              <span className="text-primary">joy of code</span>, together.
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              Join a global community of developers, build amazing projects, and learn
              from others in a supportive environment.
            </p>

            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center group"
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white dark:bg-gray-800 text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Explore Projects
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </main>
      </div>
    </>
  );
}