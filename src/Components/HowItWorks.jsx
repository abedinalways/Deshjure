import { motion } from 'framer-motion';
import { FaBox, FaMoneyBillWave, FaMapPin, FaBriefcase } from 'react-icons/fa';

const HowItWorks = () => {
  const cards = [
    {
      title: 'Booking Pick & Drop',
      description:
        'Book parcel pickup and drop-off easily from anywhere in Bangladesh with real-time tracking.',
      icon: <FaBox className="text-4xl text-orange-500" />,
      buttonText: 'Book Now',
      buttonColor: 'btn-primary',
    },
    {
      title: 'Cash on Delivery',
      description:
        'Pay conveniently upon parcel delivery with secure and reliable cash-on-delivery options.',
      icon: <FaMoneyBillWave className="text-4xl text-green-500" />,
      buttonText: 'Explore COD',
      buttonColor: 'btn-success',
    },
    {
      title: 'Delivery Hub',
      description:
        'Access our nationwide hubs for fast, efficient parcel sorting and distribution.',
      icon: <FaMapPin className="text-4xl text-blue-500" />,
      buttonText: 'Find a Hub',
      buttonColor: 'btn-info',
    },
    {
      title: 'Booking SME & Corporate',
      description:
        'Tailored bulk delivery solutions for SMEs and corporates with seamless integration.',
      icon: <FaBriefcase className="text-4xl text-purple-500" />,
      buttonText: 'Join as Partner',
      buttonColor: 'btn-secondary',
    },
  ];

  return (
    <section className="py-16  font-[sora]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          How DeshJure Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="card bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center h-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <button className={`btn ${card.buttonColor} btn-sm`}>
                {card.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
