import React from 'react';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '400px',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <div 
        style={{
          width: '50px',
          height: '50px',
          border: '3px solid #6366f1',
          borderTop: '3px solid transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} 
      />
      <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
        {message}
      </p>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `
      }} />
    </div>
  );
};

export default LoadingSpinner;