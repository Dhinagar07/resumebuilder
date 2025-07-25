import React from 'react';
import { motion } from 'framer-motion';

const Particle = ({ size, x, y, delay, duration, color }) => (
  <motion.div
    initial={{ x, y, opacity: 1 }}
    animate={{
      y: [y, y + 20, y],
      x: [x, x + 10, x],
      opacity: [1, 0.6, 1],
    }}
    transition={{
      repeat: Infinity,
      repeatType: 'mirror',
      duration,
      delay,
      ease: 'easeInOut',
    }}
    style={{
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: color,
      filter: 'blur(1px)',
      zIndex: 0,
    }}
  />
);

export default Particle;