import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { templates } from './templates';
import Navbar from './Navbar';
import ParticleBackground from '../components/ParticleBackground';
import AboutSection from '../components/AboutSection';

const About = () => {
  const navigate = useNavigate();
  
  const handleEdit = (template) => {
    sessionStorage.setItem('selectedTemplate', template.html);
    sessionStorage.setItem('templateName', template.name);
    navigate('/editor');
  };

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        fontFamily: "'Poppins', sans-serif",
        overflowX: 'hidden',
      }}
    >
      
      <ParticleBackground />

      

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          padding: '40px 20px',
          zIndex: 10,
          minHeight: '90vh',
          maxWidth: '1400px',
          margin: 'auto',
        }}
      >
          <AboutSection showContent={true} />
        </motion.div>  
        
      <style dangerouslySetInnerHTML={{
        __html: `
          *::-webkit-scrollbar {
            width: 8px;
          }
          *::-webkit-scrollbar-track {
            background: rgba(15, 23, 42, 0.5);
            border-radius: 4px;
          }
          *::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            border-radius: 4px;
          }
          *::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #4f46e5, #7c3aed);
          }
        `
      }} />
    </div>
  );
};

export default About;
