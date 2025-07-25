import { useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';

const usePdfGenerator = (templates) => {
  const [pdfUrls, setPdfUrls] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generatePdfPreviews = async () => {
      try {
        setLoading(true);
        const urls = {};
        
        // Process templates in batches to avoid overwhelming the browser
        const batchSize = 2;
        for (let i = 0; i < templates.length; i += batchSize) {
          const batch = templates.slice(i, i + batchSize);
          
          await Promise.all(
            batch.map(async (template) => {
              try {
                const container = document.createElement('div');
                container.innerHTML = template.html;
                container.style.cssText = `
                  padding: 20px;
                  width: 800px;
                  font-family: Arial, sans-serif;
                  background: white;
                  color: black;
                `;

                const opt = {
                  margin: 0,
                  filename: `${template.name.replace(/\s+/g, '_')}_preview.pdf`,
                  image: { type: 'jpeg', quality: 0.8 },
                  html2canvas: { 
                    scale: 0.8,
                    useCORS: true,
                    allowTaint: true,
                    letterRendering: true
                  },
                  jsPDF: { 
                    unit: 'in', 
                    format: 'letter', 
                    orientation: 'portrait',
                    compress: true
                  },
                };

                const blob = await html2pdf()
                  .from(container)
                  .set(opt)
                  .outputPdf('blob');
                
                const url = URL.createObjectURL(blob);
                urls[template.id] = url;
              } catch (error) {
                console.error(`Error generating preview for ${template.name}:`, error);
                // Create a fallback preview
                urls[template.id] = null;
              }
            })
          );
          
          // Small delay between batches to prevent browser freeze
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        setPdfUrls(urls);
      } catch (error) {
        console.error('Error generating PDF previews:', error);
      } finally {
        setLoading(false);
      }
    };

    if (templates && templates.length > 0) {
      generatePdfPreviews();
    }

    // Cleanup function to revoke object URLs
    return () => {
      Object.values(pdfUrls).forEach(url => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, [templates]);

  return { pdfUrls, loading };
};

export default usePdfGenerator;