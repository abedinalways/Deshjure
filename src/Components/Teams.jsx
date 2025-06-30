import React from 'react';
import { motion } from 'framer-motion';

// Custom Marquee Component
const Marquee = ({ children, speed = 50, direction = 'left' }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-block"
        animate={{
          x: direction === 'left' ? [0, '-50%'] : ['-50%', 0],
        }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Teams = () => {
  const companies = [
    {
      id: 1,
      name: 'Square',
      logo: (
        <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg text-white font-bold text-sm">
          SQ
        </div>
      ),
    },
    {
      id: 2,
      name: 'Akij Group',
      logo: (
        <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-lg text-white font-bold text-sm">
          AK
        </div>
      ),
    },
    {
      id: 3,
      name: 'Bashundhara',
      logo: (
        <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg text-white font-bold text-sm">
          BG
        </div>
      ),
    },
    {
      id: 4,
      name: 'BRAC',
      logo: (
        <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg text-white font-bold text-sm">
          BR
        </div>
      ),
    },
    {
      id: 5,
      name: 'Grameenphone',
      logo: (
        <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-lg text-white font-bold text-sm">
          GP
        </div>
      ),
    },
    {
      id: 6,
      name: 'City Group',
      logo: (
        <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-lg text-white font-bold text-sm">
          CG
        </div>
      ),
    },
    {
      id: 7,
      name: 'Pran-RFL',
      logo: (
        <div className="flex items-center justify-center w-12 h-12 bg-pink-600 rounded-lg text-white font-bold text-sm">
          PR
        </div>
      ),
    },
    {
      id: 8,
      name: 'Walton',
      logo: (
        <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-lg text-white font-bold text-sm">
          WL
        </div>
      ),
    },
    {
      id: 9,
      name: 'Robi Axiata',
      logo: (
        <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-lg text-white font-bold text-sm">
          RX
        </div>
      ),
    },
    {
      id: 10,
      name: 'ACI Limited',
      logo: (
        <div className="flex items-center justify-center w-12 h-12 bg-cyan-600 rounded-lg text-white font-bold text-sm">
          AC
        </div>
      ),
    },
  ];

  const CompanyItem = ({ company }) => (
    <div className="inline-flex items-center mx-8 md:mx-12">
      <div className="mr-3">{company.logo}</div>
      <span className="text-white font-medium text-lg md:text-xl whitespace-nowrap">
        {company.name}
      </span>
    </div>
  );

  return (
    <div className="py-16 font-[sora] text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We've helped thousands of sales teams
          </h2>
        </motion.div>

        {/* Infinite Marquee */}
        <div className="relative">
          <Marquee speed={25} direction="left">
            <div className="flex items-center">
              {/* First set */}
              {companies.map(company => (
                <CompanyItem key={company.id} company={company} />
              ))}
              {/* Second set for seamless loop */}
              {companies.map(company => (
                <CompanyItem
                  key={`duplicate-${company.id}`}
                  company={company}
                />
              ))}
              {/* Third set for extra smoothness */}
              {companies.map(company => (
                <CompanyItem key={`triple-${company.id}`} company={company} />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Teams;
