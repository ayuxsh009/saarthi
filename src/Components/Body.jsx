import React from 'react';
import { motion } from 'framer-motion';

const Body = () => {
  return (
    <main className="container mx-auto px-6 md:px-12">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-500 to-purple-500 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold font-serif mb-6"
        >
          Kids have fun, you see <span className="text-yellow-400">learning progress</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg mb-8 max-w-3xl mx-auto"
        >
          Children experience fun while you observe tangible learning outcomes.
        </motion.p>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-100"
          >
            Get Started Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-white px-6 py-3 rounded shadow hover:bg-gray-100"
          >
            Watch Video
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
        <div className="relative w-full max-w-sm mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-full border-4 border-gray-50 w-100 h-100 flex items-center justify-center"
          >
            <div className="absolute -top-4 -left-4 bg-white shadow rounded-full p-1">
              <img src="./books.png" alt="EBooks" className="w-20 h-20" />
            </div>
            <img
              src="/circle.png"
              alt="Child Learning"
              className="rounded-full w-150 h-150 object-cover "
            />
            <div className="absolute bottom-8 right-0 bg-white shadow rounded-full p-0">
              <img src="./umb.png" alt="Bag" className="w-20 h-20" />
            </div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <FeatureCard
            icon="./explore.jpeg"
            title="Explore"
            description="Discover new ways for kids to enjoy while they learn valuable skills."
          />
          <FeatureCard
            icon="./discover.png"
            title="Discover"
            description="Enhance their learning experience with interactive activities."
          />
          <FeatureCard
            icon="./interact.png"
            title="Interact"
            description="Engage in activities designed to build their confidence and skills."
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 text-gray-800">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">What Parents Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            content="Saarthi has transformed how my kids learn. They are more engaged and always excited for the next session."
            author="Jane Doe"
          />
          <TestimonialCard
            content="The interactive games have been a hit in our house. It's amazing to see them learning so much while having fun!"
            author="John Smith"
          />
          <TestimonialCard
            content="I highly recommend Saarthi to any parent looking for a fun and effective way to teach their children."
            author="Emily Johnson"
          />
        </div>
      </section>
    </main>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="flex items-center space-x-4"
  >
    <img src={icon} alt="" className="w-12 h-12" />
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const TestimonialCard = ({ content, author }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="bg-white shadow-lg rounded-lg p-6"
  >
    <p className="text-gray-700 italic mb-4">"{content}"</p>
    <h4 className="text-gray-900 font-bold">- {author}</h4>
  </motion.div>
);

export default Body;
