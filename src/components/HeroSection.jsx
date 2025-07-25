import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ showContent, onGetStarted }) => {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: showContent ? 0 : 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 20px',
        zIndex: 10,
        userSelect: 'none',
        pointerEvents: showContent ? 'none' : 'auto',
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          fontSize: 'clamp(2rem, 6vw, 4rem)',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #818cf8, #c084fc)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 20px rgba(129, 140, 248, 0.5)',
          marginBottom: '20px',
        }}
      >
        Build Your Dream Resume Effortlessly
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
          maxWidth: '700px',
          color: '#cbd5e1',
          marginBottom: '40px',
          fontWeight: '400',
          lineHeight: 1.6,
        }}
      >
        Select from stylish templates, customize easily, and export your professional resume in PDF instantly.
      </motion.p>
      
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileHover={{ 
          scale: 1.05, 
          backgroundColor: '#4f46e5',
          boxShadow: '0 8px 25px rgba(99, 102, 241, 0.6)'
        }}
        whileTap={{ scale: 0.95 }}
        onClick={onGetStarted}
        style={{
          padding: '16px 48px',
          fontSize: '1.25rem',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          border: 'none',
          borderRadius: '12px',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(99, 102, 241, 0.4)',
          transition: 'all 0.3s ease',
        }}
      >
        Get Started
      </motion.button>
    </motion.section>
  );
};

export default HeroSection