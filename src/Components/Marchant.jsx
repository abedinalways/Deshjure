import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Package, TrendingUp } from 'lucide-react';

const Merchant = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const illustrationVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: 10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-teal-600 rounded-3xl p-8 md:p-12"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-300 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-teal-400 to-transparent rounded-full transform -translate-x-24 translate-y-24"></div>
        </div>

        {/* Decorative Lines */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="absolute top-8 right-8 w-64 h-32"
            viewBox="0 0 256 128"
          >
            <path
              d="M0,64 Q64,32 128,64 T256,64"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-teal-200"
            />
            <path
              d="M0,80 Q64,48 128,80 T256,80"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-teal-200"
            />
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-white">
            <motion.h1
              variants={textVariants}
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
            >
              Merchant and Customer Satisfaction
              <br />
              <span className="text-teal-200">is Our First Priority</span>
            </motion.h1>

            <motion.p
              variants={textVariants}
              className="text-teal-100 text-lg mb-8 leading-relaxed max-w-md"
            >
              We offer the lowest delivery charges with the highest value along
              with 100% safety of your product. Fastest courier delivers your
              parcels in every corner of Bangladesh right on time.
            </motion.p>

            <motion.div
              variants={buttonVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Become a Merchant
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-teal-200 hover:bg-teal-200 hover:text-teal-800 text-teal-200 font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                Earn with Profast Courier
              </motion.button>
            </motion.div>
          </div>

          {/* Illustration */}
          <motion.div
            variants={illustrationVariants}
            className="relative flex justify-center items-center"
          >
            <div className="relative">
              {/* Main Package */}
              <div className="relative w-48 h-32 border-2 border-teal-200 rounded-lg">
                <div className="absolute inset-2 border border-teal-300 rounded"></div>

                {/* Package Details */}
                <div className="absolute top-4 left-4 w-16 h-2 bg-teal-200 rounded"></div>
                <div className="absolute top-8 left-4 w-12 h-1 bg-teal-300 rounded"></div>

                {/* Location Pin */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-8 right-8"
                >
                  <div className="w-6 h-6 border-2 border-teal-200 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-teal-200 rounded-full"></div>
                  </div>
                  <div className="w-0.5 h-4 bg-teal-200 mx-auto"></div>
                </motion.div>
              </div>

              {/* Second Package */}
              <div className="absolute -bottom-4 -left-8 w-32 h-24 border-2 border-teal-300 rounded-lg opacity-80">
                <div className="absolute inset-2 border border-teal-400 rounded"></div>
                <div className="absolute top-3 left-3 w-10 h-1 bg-teal-300 rounded"></div>
                <div className="absolute top-6 left-3 w-8 h-1 bg-teal-400 rounded"></div>
              </div>

              {/* Connecting Lines */}
              <svg
                className="absolute -right-16 top-8 w-24 h-16"
                viewBox="0 0 96 64"
              >
                <motion.path
                  d="M0,32 Q24,16 48,32 T96,32"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-teal-200"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
              </svg>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-12 -left-8 w-4 h-4 border border-teal-200 rounded"
              ></motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute -bottom-8 right-4 w-3 h-3 border border-teal-300 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Merchant;
