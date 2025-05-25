import React, { useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import Editor from '@monaco-editor/react';

const HtmlToPdfEditor = () => {
  const [htmlCode, setHtmlCode] = useState('<h1>Hello PDF</h1>');
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [mobileAlertShown, setMobileAlertShown] = useState(false);

  useEffect(() => {
    const storedHtml = localStorage.getItem('selectedTemplate');
    if (storedHtml) setHtmlCode(storedHtml);

    const handleResize = () => {
      const isMobileNow = window.innerWidth < 768;
      setIsMobile(isMobileNow);
      if (isMobileNow && !mobileAlertShown) {
        alert('Preview not available in mobile');
        setMobileAlertShown(true);
      }
    };

    handleResize(); // Run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileAlertShown]);

  const handleCompile = async () => {
    const container = document.createElement('div');
    container.innerHTML = htmlCode;
    container.style.padding = '20px';
    container.style.fontFamily = 'Arial';

    const opt = {
      margin: 0.5,
      filename: 'output.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    const blob = await html2pdf().from(container).set(opt).outputPdf('blob');
    const pdfBlobUrl = URL.createObjectURL(blob);
    setPdfUrl(pdfBlobUrl);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        height: '100vh',
        backgroundColor: '#333',
        color: '#fff',
      }}
    >
      {/* Left: Editor */}
      <div
        style={{
          flex: 1,
          padding: '10px',
          width: isMobile ? '100%' : '50%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          <h2 style={{ fontSize: '1.2rem' }}>HTML Editor</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handleCompile}
              style={{
                backgroundColor: '#1E1E1E',
                color: '#ffffff',
                padding: '8px 12px',
                fontSize: '0.9rem',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Compile
            </button>
            <button
              onClick={() => setShowPreview((prev) => !prev)}
              style={{
                backgroundColor: '#1E1E1E',
                color: '#ffffff',
                padding: '8px 12px',
                fontSize: '0.9rem',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </button>
          </div>
        </div>

        <div style={{ flexGrow: 1 }}>
          <Editor
            height="100%"
            defaultLanguage="html"
            theme="vs-dark"
            value={htmlCode}
            onChange={(value) => setHtmlCode(value)}
          />
        </div>
      </div>

      {/* Right: PDF Preview */}
      {showPreview && !isMobile && (
        <div
          style={{
            flex: 1,
            padding: '10px',
            width: '50%',
            borderLeft: '1px solid #666',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h2 style={{ fontSize: '1.2rem' }}>PDF Preview</h2>
          {pdfUrl ? (
            <iframe
              src={pdfUrl}
              title="PDF Preview"
              style={{
                width: '100%',
                height: '100%',
                border: '1px solid #444',
                borderRadius: '4px',
                flexGrow: 1,
              }}
            />
          ) : (
            <p>Compile for preview</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HtmlToPdfEditor;
