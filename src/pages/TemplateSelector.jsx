import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { templates } from './templates';
import Navbar from './Navbar';
import ParticleBackground from '../components/ParticleBackground';
import HeroSection from '../components/HeroSection';
import TemplateSection from '../components/TemplateSection';
import AboutSection from '../components/AboutSection';
import usePdfGenerator from '../hooks/usePdfGenerator';
import useScrollHandler from '../hooks/useScrollHandler';

const HomePage = () => {
  const navigate = useNavigate();
  const { pdfUrls, loading } = usePdfGenerator(templates);
  const { showContent, scrollToContent } = useScrollHandler(0.5);
  const [activeTab, setActiveTab] = useState('templates');

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

      <HeroSection 
        showContent={showContent} 
        onGetStarted={scrollToContent} 
      />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 100 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          padding: '40px 20px',
          zIndex: 10,
          minHeight: '90vh',
          maxWidth: '1400px',
          margin: 'auto',
          visibility: showContent ? 'visible' : 'hidden',
        }}
      >
        {/* Tabs Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '70px', }}>
          <button
            onClick={() => setActiveTab('templates')}
            style={{
              background: activeTab === 'templates' ? '#6366f1' : 'transparent',
              color: activeTab === 'templates' ? '#fff' : '#94a3b8',
              border: 'none',
              padding: '10px 20px',
              marginRight: 10,
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Templates
          </button>
          <button
            onClick={() => setActiveTab('about')}
            style={{
              background: activeTab === 'about' ? '#6366f1' : 'transparent',
              color: activeTab === 'about' ? '#fff' : '#94a3b8',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            About
          </button>
        </div>

        {/* Tabs Content */}
        {activeTab === 'templates' && (
          <TemplateSection
            templates={templates}
            pdfUrls={pdfUrls}
            loading={loading}
            onEdit={handleEdit}
            showContent={showContent}
          />
        )}

        {activeTab === 'about' && (
          <AboutSection showContent={showContent} />
        )}
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

export default HomePage;
