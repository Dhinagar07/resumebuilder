import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Templates', path: '/templates' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      style={{
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 999,
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(26, 26, 26, 0.85)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.75rem 1.5rem',
          height: '64px',
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            style={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
              color: '#8b5cf6',
              textDecoration: 'none',
            }}
          >
            ResumeBuilder
          </Link>
        </motion.div>

        {/* Nav Links or Menu Toggle */}
        {isMobile ? (
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: '1.75rem',
              color: '#8b5cf6',
              cursor: 'pointer',
              zIndex: 1001,
            }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '2rem' }}>
            {navLinks.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                style={{
                  color: '#e5e7eb',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                  position: 'relative',
                  paddingBottom: '4px',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#c084fc')}
                onMouseLeave={(e) => (e.target.style.color = '#e5e7eb')}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: '#1f2937',
              margin: 0,
              padding: '1rem 0',
              listStyle: 'none',
              textAlign: 'center',
              overflow: 'hidden',
            }}
          >
            {navLinks.map(({ label, path }) => (
              <li key={label} style={{ padding: '0.75rem 0' }}>
                <Link
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: '#f1f5f9',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#c084fc')}
                  onMouseLeave={(e) => (e.target.style.color = '#f1f5f9')}
                >
                  {label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
