import React from 'react';
import { motion } from 'framer-motion';
import {
  Truck,
  MapPin,
  Package,
  CreditCard,
  Building,
  RotateCcw,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Truck className="w-8 h-8" />,
      title: 'Express & Standard Delivery',
      description:
        'We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.',
      hoverColor: 'from-blue-500 to-purple-600',
      defaultBg: 'bg-white',
    },
    {
      id: 2,
      icon: <MapPin className="w-8 h-8" />,
      title: 'Nationwide Delivery',
      description:
        'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.',
      hoverColor: 'from-green-400 to-cyan-500',
      defaultBg: 'bg-gradient-to-br from-green-400 to-green-500',
      featured: true,
    },
    {
      id: 3,
      icon: <Package className="w-8 h-8" />,
      title: 'Fulfillment Solution',
      description:
        'We also offer customized service with inventory management support, online order processing, packaging, and after sales support.',
      hoverColor: 'from-purple-500 to-pink-600',
      defaultBg: 'bg-white',
    },
    {
      id: 4,
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Cash on Home Delivery',
      description:
        '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.',
      hoverColor: 'from-orange-400 to-red-500',
      defaultBg: 'bg-white',
    },
    {
      id: 5,
      icon: <Building className="w-8 h-8" />,
      title: 'Corporate Service / Contract In Logistics',
      description:
        'Customized corporate services which includes warehouse and inventory management support.',
      hoverColor: 'from-indigo-500 to-blue-600',
      defaultBg: 'bg-white',
    },
    {
      id: 6,
      icon: <RotateCcw className="w-8 h-8" />,
      title: 'Parcel Return',
      description:
        'Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.',
      hoverColor: 'from-teal-400 to-green-500',
      defaultBg: 'bg-white',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="font-[sora] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl  font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map(service => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="group relative overflow-hidden rounded-2xl p-8 cursor-pointer transition-all duration-500 ease-out"
            >
              {/* Default Background */}
              <div
                className={`absolute inset-0 ${service.defaultBg} ${
                  service.featured ? 'opacity-100' : 'opacity-100'
                } transition-opacity duration-500 group-hover:opacity-0`}
              />

              {/* Hover Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.hoverColor} opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-110 group-hover:scale-100`}
              />

              {/* Animated Background Particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" />
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-bounce" />
                <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-ping" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-500 ${
                    service.featured
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-600 group-hover:bg-white/20 group-hover:text-white'
                  }`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3
                  className={`text-xl md:text-2xl font-bold mb-4 transition-colors duration-300 ${
                    service.featured
                      ? 'text-white'
                      : 'text-gray-800 group-hover:text-white'
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm md:text-base leading-relaxed transition-colors duration-300 ${
                    service.featured
                      ? 'text-gray-100'
                      : 'text-gray-600 group-hover:text-gray-100'
                  }`}
                >
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -20 }}
                  whileHover={{ x: 0 }}
                >
                  <div className="flex items-center text-white">
                    <span className="text-sm font-medium mr-2">Learn more</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Subtle Border Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
