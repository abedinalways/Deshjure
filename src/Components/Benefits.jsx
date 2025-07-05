import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Shield,
  Phone,
  Truck,
  Package,
  Headphones,
} from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <MapPin className="w-8 h-8 text-teal-600" />,
      title: 'Live Parcel Tracking',
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
      illustration: (
        <div className="relative w-24 h-24 bg-teal-50 rounded-lg flex items-center justify-center">
          <div className="absolute inset-0 bg-teal-100 rounded-lg transform rotate-3"></div>
          <div className="relative z-10 bg-white p-3 rounded-lg shadow-sm">
            <MapPin className="w-6 h-6 text-teal-600" />
          </div>
          <div className="absolute top-2 right-2 w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
        </div>
      ),
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: '100% Safe Delivery',
      description:
        'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
      illustration: (
        <div className="relative w-24 h-24  rounded-lg flex items-center justify-center">
          <div className="absolute inset-0 rounded-lg transform -rotate-2"></div>
          <div className="relative z-10  p-3 rounded-lg shadow-sm">
            <Package className="w-6 h-6 text-blue-600" />
          </div>
          <div className="absolute top-1 right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            <Shield className="w-2 h-2 text-white" />
          </div>
        </div>
      ),
    },
    {
      icon: <Phone className="w-8 h-8 text-purple-600" />,
      title: '24/7 Call Center Support',
      description:
        'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.',
      illustration: (
        <div className="relative w-24 h-24 bg-purple-50 rounded-lg flex items-center justify-center">
          <div className="absolute inset-0 bg-purple-100 rounded-lg transform rotate-1"></div>
          <div className="relative z-10 bg-white p-3 rounded-lg shadow-sm">
            <Headphones className="w-6 h-6 text-purple-600" />
          </div>
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="w-full px-20 mx-auto p-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-start space-x-6">
              {/* Illustration */}
              <motion.div
                initial={{ rotate: -5 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex-shrink-0"
              >
                {benefit.illustration}
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  className="text-xl font-bold text-gray-900 mb-3"
                >
                  {benefit.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="text-gray-600 leading-relaxed"
                >
                  {benefit.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Benefits;
