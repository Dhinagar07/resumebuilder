import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiEdit, FiDownload, FiCheckCircle, FiSearch, FiCode } from 'react-icons/fi';

const AboutSection = ({ showContent, full = true }) => {
  const navigate = useNavigate();

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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

  const points = [
    {
      icon: <FiEdit size={32} color="#8b5cf6" />,
      title: 'Live Editing',
      desc: 'Customize your resume in real-time with our intuitive HTML editor.',
    },
    {
      icon: <FiDownload size={32} color="#8b5cf6" />,
      title: 'Instant PDF Export',
      desc: 'Download your resume as a high-quality PDF instantly with one click.',
    },
    {
      icon: <FiCode size={32} color="#8b5cf6" />,
      title: 'Clean HTML Templates',
      desc: 'Choose from a range of modern, clean, and professional templates.',
    },
    {
      icon: <FiSearch size={32} color="#8b5cf6" />,
      title: 'ATS-Friendly',
      desc: 'Ensure your resume passes applicant tracking systems effortlessly.',
    },
    {
      icon: <FiCheckCircle size={32} color="#8b5cf6" />,
      title: 'Designed for Everyone',
      desc: "Whether you're a student or a seasoned professional, this tool is for you.",
    },
  ];

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate={showContent ? 'visible' : 'hidden'}
      style={{
        flex: 1,
        backgroundColor: 'rgba(31, 41, 55, 0.9)',
        borderRadius: '20px',
        padding: '40px 30px',
        color: '#cbd5e1',
        boxShadow: '0 25px 60px rgba(99, 102, 241, 0.25)',
        border: '1px solid rgba(99, 102, 241, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '85vh',
        overflowY: 'auto',
        backdropFilter: 'blur(12px)',
        marginTop: '70px',
      }}
    >
      <h2
        style={{
          fontSize: 'clamp(2.2rem, 4.5vw, 3rem)',
          background: 'linear-gradient(135deg, #818cf8, #c084fc)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800',
          marginBottom: '30px',
          textAlign: 'center',
        }}
      >
        About This Tool
      </h2>

      <div style={{ fontSize: '1.25rem', lineHeight: 1.9 }}>
        {full ? (
          <p style={{ marginBottom: '25px' }}>
            Our Resume Builder is a powerful, web-based tool designed to streamline the job application process. It allows users to select from modern HTML templates, edit live with ease, and export high-quality PDFs that meet ATS (Applicant Tracking System) standards. Perfect for graduates, professionals, and creatives alike—this tool combines aesthetic appeal with functional precision.
          </p>
        ) : (
          <p style={{ marginBottom: '25px' }}>
            Build your resume with live editing, custom templates, and instant PDF export. Perfect for job seekers and professionals...
          </p>
        )}

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'space-between',
            marginTop: '10px',
          }}
        >
          {points.map((point, idx) => (
            <div
              key={idx}
              style={{
                flex: '1 1 45%',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                minWidth: '280px',
              }}
            >
              <div style={{ paddingTop: '6px' }}>{point.icon}</div>
              <div>
                <strong style={{ fontSize: '1.15rem', color: '#e0e7ff' }}>{point.title}</strong>
                <p style={{ margin: 0, color: '#94a3b8', fontSize: '1rem' }}>{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </motion.div>
  );
};

export default AboutSection;
