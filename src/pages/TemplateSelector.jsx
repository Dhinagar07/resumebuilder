import React, { useEffect, useState } from 'react';
import { templates } from './templates';
import { useNavigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import { motion } from 'framer-motion';

const TemplateSelector = () => {
  const navigate = useNavigate();
  const [pdfUrls, setPdfUrls] = useState({});

  useEffect(() => {
    const generatePdfPreviews = async () => {
      const urls = {};
      for (const template of templates) {
        const container = document.createElement('div');
        container.innerHTML = template.html;
        container.style.padding = '20px';

        const opt = {
          margin: 0,
          filename: 'preview.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 1 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        };

        const blob = await html2pdf().from(container).set(opt).outputPdf('blob');
        const url = URL.createObjectURL(blob);
        urls[template.id] = url;
      }
      setPdfUrls(urls);
    };

    generatePdfPreviews();
  }, []);

  const handleEdit = (template) => {
    localStorage.setItem('selectedTemplate', template.html);
    navigate('/editor');
  };

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#333',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
    }}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', textAlign: 'center', marginBottom: '20px' }}
      >
        Choose a Template
      </motion.h1>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
      }}>
        {templates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              width: '100%',
              maxWidth: '300px',
              padding: '12px',
              background: '#444',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h4 style={{ fontSize: '1rem', textAlign: 'center' }}>{template.name}</h4>
            {pdfUrls[template.id] ? (
              <iframe
                src={pdfUrls[template.id]}
                title={`Preview ${template.name}`}
                style={{
                  width: '100%',
                  height: '360px',
                  border: 'none',
                  borderRadius: '4px',
                }}
              />
            ) : (
              <p style={{ textAlign: 'center' }}>Loading...</p>
            )}
            <button
              onClick={() => handleEdit(template)}
              style={{
                marginTop: '10px',
                padding: '8px 16px',
                background: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                width: '100%',
              }}
            >
              Edit
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
