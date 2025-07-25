import React from 'react';
import { motion } from 'framer-motion';

const TemplateCard = ({ template, pdfUrl, onEdit, index }) => {
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
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: '0 8px 25px rgba(99, 102, 241, 0.4)' 
      }}
      style={{
        border: '1px solid rgba(99, 102, 241, 0.3)',
        borderRadius: '12px',
        padding: '20px',
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.8))',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#e0e7ff',
        transition: 'all 0.3s ease',
      }}
    >
      <h4 style={{ 
        fontSize: '1.2rem', 
        marginBottom: '15px', 
        textAlign: 'center',
        fontWeight: '600'
      }}>
        {template.name}
      </h4>
      
      {pdfUrl ? (
        <iframe
          src={pdfUrl}
          title={`Preview ${template.name}`}
          style={{
            width: '100%',
            height: '300px',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: 'white',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        />
      ) : (
        <div style={{
          width: '100%',
          height: '300px',
          backgroundColor: '#1e293b',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px dashed #475569'
        }}>
          <p style={{ color: '#94a3b8', textAlign: 'center' }}>
            Loading preview...
          </p>
        </div>
      )}
      
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: '#4f46e5' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onEdit(template)}
        style={{
          marginTop: '15px',
          padding: '12px 24px',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '600',
          width: '100%',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
        }}
      >
        Edit Template
      </motion.button>
    </motion.div>
  );
};

export default TemplateCard;