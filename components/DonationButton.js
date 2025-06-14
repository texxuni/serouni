import { useState } from 'react';
import { motion } from '@emotion/react';

const DonationButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <button
        onClick={() => {/* TODO: Implement donation modal */}}
        className="bg-gradient-to-r from-accent-teal to-pastel-teal text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
      >
        <span role="img" aria-label="heart" className="text-xl">
          {isHovered ? '💝' : '💖'}
        </span>
        <span>Support Our Mission</span>
      </button>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg text-sm text-gray-600 whitespace-nowrap"
      >
        Help us create more healing spaces
      </motion.div>
    </motion.div>
  );
};

export default DonationButton; 