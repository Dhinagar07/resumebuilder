import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { templates } from './templates';
import Navbar from './Navbar';
import ParticleBackground from '../components/ParticleBackground';
import TemplateSection from '../components/TemplateSection';
import usePdfGenerator from '../hooks/usePdfGenerator';
import useScrollHandler from '../hooks/useScrollHandler';

const AllTemplates = () => {
  const navigate = useNavigate();
  const { pdfUrls, loading } = usePdfGenerator(templates);
  
  const handleEdit = (template) => {
    localStorage.setItem('selectedTemplate', template.html);
    localStorage.setItem('templateName', template.name);
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
          <TemplateSection
            templates={templates}
            pdfUrls={pdfUrls}
            loading={loading}
            onEdit={handleEdit}
            showContent={true}
            showSearch={true}
          />
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

export default AllTemplates;
