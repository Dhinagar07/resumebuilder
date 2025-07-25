import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import TemplateCard from './TemplateCard';
import LoadingSpinner from './LoadingSpinner';

const TemplateSection = ({
  templates = [],
  pdfUrls = {},
  loading,
  onEdit,
  showContent,
  showSearch = false, // true for templates page, false for home page
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const filteredTemplates = Array.isArray(templates)
    ? templates.filter((template) =>
        template.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={showContent ? 'visible' : 'hidden'}
      style={{
        flex: 1,
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        borderRadius: '16px',
        padding: showSearch ? '40px 50px' : '30px',
        boxShadow: '0 20px 50px rgba(99, 102, 241, 0.3)',
        border: '1px solid rgba(99, 102, 241, 0.2)',
        maxHeight: showSearch ? 'none' : '85vh',
        overflowY: showSearch ? 'visible' : 'auto',
        color: '#e0e7ff',
        display: 'flex',
        flexDirection: 'column',
        backdropFilter: 'blur(10px)',
        marginTop: showSearch ? '120px' : '70px',
        marginBottom: showSearch ? '60px' : '0',
        width: '100%',
      }}
    >
      <motion.h2
        variants={itemVariants}
        style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          marginBottom: '30px',
          fontWeight: '700',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Select a Resume Template
      </motion.h2>

      {showSearch && (
        <motion.input
          variants={itemVariants}
          type="text"
          placeholder="Search templates..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: '12px 16px',
            marginBottom: '25px',
            borderRadius: '8px',
            border: '1px solid #818cf8',
            outline: 'none',
            backgroundColor: '#1e293b',
            color: '#e0e7ff',
            fontSize: '1rem',
            width: '100%',
          }}
        />
      )}

      {loading ? (
        <LoadingSpinner message="Generating template previews..." />
      ) : (
        <motion.div
          variants={containerVariants}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            flexGrow: 1,
          }}
        >
          {filteredTemplates.slice(0, showSearch ? undefined : 6).map((template, index) => (
            <TemplateCard
              key={template.id}
              template={template}
              pdfUrl={pdfUrls[template.id]}
              onEdit={onEdit}
              index={index}
            />
          ))}
        </motion.div>
      )}

      {!showSearch && (
        <motion.button
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            backgroundColor: '#6366f1',
            boxShadow: '0 6px 20px rgba(129, 140, 248, 0.4)',
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/templates')}
          style={{
            marginTop: '30px',
            padding: '14px 32px',
            background: 'linear-gradient(135deg, #818cf8, #a78bfa)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: '700',
            fontSize: '1.1rem',
            alignSelf: 'center',
            transition: 'all 0.3s ease',
          }}
        >
          Show More Templates
        </motion.button>
      )}
    </motion.div>
  );
};

export default TemplateSection;
