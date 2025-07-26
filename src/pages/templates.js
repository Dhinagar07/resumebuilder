// templates.js
export const templates = [
  {
    id: 'template1',
    name: 'Classic Resume',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>John Doe - Resume</title>
  <style>
    body {
      font-family: 'Times New Roman', serif;
      margin: 1px;
      background-color: #ffffff;
      color: #000000;
      font-size: 14.5px;
      line-height: 1.4;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    td {
      vertical-align: top;
      padding: 2px 4px;
    }

    .top-header td {
      padding: 0;
      vertical-align: top;
    }

    .top-left {
      font-weight: bolder;
      width: 65%;
    }

    .top-right {
      text-align: right;
      width: 35%;
      white-space: nowrap;
      line-height: 1.6;
    }

    .subtitle {
      font-style: italic;
      margin-top: 2px;
      word-wrap: break-word;
    }

    .section {
      margin-top: 20px;
    }

    .section-title {
      font-weight: bold;
      border-bottom: 1px solid #000;
      margin-bottom: 6px;
    }

    .edu-table td:first-child {
      width: 75%;
    }

    .edu-table td:last-child {
      width: 25%;
      text-align: right;
    }

    .item-title {
      font-weight: bold;
      margin-top: 5px;
    }

    ul {
      margin: 4px 0 10px 16px;
      padding-left: 0;
    }
  </style>
</head>
<body>

  <!-- Header -->
  <table class="top-header">
    <tr>
      <td class="top-left">
        <div>John Doe</div>
        <div class="subtitle">
          Passionate CSE undergrad eager to build and innovate with modern technologies, open to new ideas and eager to solve real-world problems using tech.
        </div>
      </td>
      <td class="top-right">
        📞 +91-9876543210<br>
        📧 johndoe@example.com<br>
        🔗 github.com/johndoe
      </td>
    </tr>
  </table>

  <!-- Education -->
  <div class="section">
    <div class="section-title">Education</div>
    <table class="edu-table">
      <tr>
        <td><strong>ABC Institute of Technology</strong><br>B.E. in Computer Science and Engineering</td>
        <td>2022–present<br>CGPA: 8.5</td>
      </tr>
      <tr>
        <td><strong>XYZ Higher Secondary School</strong><br>Higher Secondary Education (CBSE)</td>
        <td>2021–2022<br>95%</td>
      </tr>
      <tr>
        <td><strong>XYZ Secondary School</strong><br>Senior Secondary Education (CBSE)</td>
        <td>2019–2020<br>89%</td>
      </tr>
    </table>
  </div>

  <!-- Projects -->
  <div class="section">
    <div class="section-title">Projects</div>

    <div class="item-title">Voice Based Email System</div>
    <ul>
      <li>Uses TTS and STT for interactive email management</li>
      <li>Incorporated BART model for automatic email summarization</li>
      <li>Tech Stack: React, Python (Flask server, PyWebview app)</li>
    </ul>

    <div class="item-title">Logistic ERP</div>
    <ul>
      <li>Manages event-based logistics for university tech club</li>
      <li>Tech Stack: Next.js, PostgreSQL</li>
    </ul>

    <div class="item-title">Ordering and Inventory Management System</div>
    <ul>
      <li>Online ordering with faster billing</li>
      <li>Customers can collect products directly after billing</li>
      <li>Tech Stack: React, Express, MySQL</li>
    </ul>
  </div>

  <!-- Positions -->
  <div class="section">
    <div class="section-title">Positions of Responsibility</div>
    <div class="item-title">Tech Lead at Coding Club</div>
    <ul>
      <li>Contributed to tech fest websites and online interactive projects</li>
      <li>Managed registrations and event planning tools</li>
    </ul>
  </div>

  <!-- Skills -->
  <div class="section">
    <div class="section-title">Skills</div>
    <ul>
      <li>Technical: C, Java, Python, React JS, Express JS, MySQL</li>
      <li>Soft Skills: Problem Solving, Self-learning, Adaptability</li>
    </ul>
  </div>

  <!-- Languages -->
  <div class="section">
    <div class="section-title">Languages</div>
    <ul>
      <li>Tamil: Native Proficiency</li>
      <li>English: Professional Proficiency</li>
    </ul>
  </div>

</body>
</html>`,
  },
  {
    id: 'template2',
    name: 'Modern Resume',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Modern Resume</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      background-color: #f4f4f4;
      color: #333;
    }
    .container {
      max-width: 800px;
      margin: auto;
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    h1 {
      margin-top: 0;
      color: #007bff;
    }
    h2 {
      border-bottom: 1px solid #ddd;
      padding-bottom: 4px;
      margin-top: 30px;
    }
    ul {
      padding-left: 20px;
    }
    .contact {
      font-size: 14px;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Jane Smith</h1>
    <p class="contact">📧 jane.smith@example.com | 📞 (123) 456-7890 | 🌐 janesmith.dev</p>

    <h2>Professional Summary</h2>
    <p>Results-driven Data Scientist with experience in building machine learning models and data pipelines. Skilled in Python, SQL, and data visualization.</p>

    <h2>Experience</h2>
    <ul>
      <li><strong>Data Scientist at XYZ Corp</strong> (2022 - Present)
        <ul>
          <li>Developed fraud detection models saving $2M annually.</li>
          <li>Built dashboards using Tableau for executive reporting.</li>
        </ul>
      </li>
    </ul>

    <h2>Education</h2>
    <ul>
      <li><strong>Master of Science in Data Science</strong><br>University of ABC, 2020–2022</li>
      <li><strong>Bachelor of Technology in Computer Engineering</strong><br>Institute of XYZ, 2016–2020</li>
    </ul>

    <h2>Skills</h2>
    <ul>
      <li>Python, R, SQL, Machine Learning, Deep Learning, Data Visualization</li>
    </ul>
  </div>
</body>
</html>`,
  },
  {
    id: 'template3',
    name: 'D Resume',
    html:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dhinagar M - Resume</title>
  <style>
    body {
      font-family: 'Times New Roman', serif;
      margin: 1px;
      background-color: #ffffff;
      color: #000000;
      font-size: 13px;
      line-height: 1.4;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    td {
      vertical-align: top;
      padding: 2px 4px;
    }

    .header {
      text-align: center;
      margin-bottom: 10px;
    }

    .header h2 {
      margin-bottom: 4px;
    }

    .contact-info {
      text-align: center;
      font-size: 14px;
    }

    .contact-info svg {
      width: 16px;
      height: 16px;
      margin-right: 6px;
      vertical-align: middle;
      fill: currentColor;
    }

    .section {
      margin-top: 15px;
    }

    .section-title {
      font-weight: bold;
      border-bottom: 1px solid #000;
      margin-bottom: 6px;
    }

    .edu-table td:first-child {
      width: 75%;
    }

    .edu-table td:last-child {
      width: 25%;
      text-align: right;
    }

    .item-title {
      font-weight: bold;
      margin-top: 5px;
    }

    ul {
      margin: 4px 0 10px 16px;
      padding-left: 0;
    }

    a {
      color: #000;
      text-decoration: none;
    }
  </style>
</head>
<body>

  <!-- Header -->
  <div class="header">
    <h2>Dhinagar M</h2>
    <div class="contact-info">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
      +91-6381242908 &nbsp;|&nbsp;
      
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
      <a href="mailto:dhinagar775@gmail.com">dhinagar775@gmail.com</a> &nbsp;|&nbsp;
      
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
      <a href="https://github.com/Dhinagar07" target="_blank">Dhinagar07</a>
    </div>
  </div>

  <!-- Profile Summary -->
  <div class="section">
    <div class="section-title">Personal Objective</div>
    <p>
      A Final-year Computer Science student with a keen interest in applying foundational knowledge to real-world challenges. I seek an environment that fosters learning and allows me to contribute to the growth of the organization and myself
    </p>
  </div> 

  <!-- Education -->
  <div class="section">
    <div class="section-title">Education</div>
    <table class="edu-table">
      <tr>
        <td><strong>College of Engineering Guindy,Chennai</strong><br>B.E-Computer Science and Engineering</td>
        <td>Oct 2022–May 2026<br>CGPA: 7.63</td>
      </tr>
      <tr>
        <td><strong>Vidyaa Vikas International School,Gandarvakottai</strong><br>Higher Secondary Education (CBSE)</td>
        <td>Jun 2021–Jun 2022<br>92.8%</td>
      </tr>
    </table>
  </div>

  <!-- Projects -->
  <div class="section">
    <div class="section-title">Projects</div>
    <table class="edu-table">
      <tr>
        <td>
          <div class="item-title">Voice-Based Email System</div>
          <ul>
            <li>Helps visually impaired users compose and manage emails through voice assistance using TTS (Text To Speech) and STT (Speech To Text).</li>
            <li>Includes email summarization using BART for efficient understanding.</li>
            <li><strong>Tech Stack:</strong> React, Python (Flask, PyWebview)</li>
        
          </ul>
          </td>
        <td>Jan 2025–Apr 2025</td>
      </tr>
      <tr>
        <td>
          <div class="item-title">Logistics ERP</div>
          <ul>
            <li>Manages event stock requests, tracks availability, and handles returns.</li>
            <li>Ensures smooth distribution across all CEG Tech Forum domains.</li>
            <li><strong>Tech Stack:</strong> Next.js, PostgreSQL</li>
        
          </ul>
          </td>
        <td>Nov 2024–Dec 2024</td>
      </tr>
      <tr>
        <td>
          <div class="item-title">Ordering and Inventory Management System</div>
          <ul>
            <li>E-commerce web app that manages inventories and reduces queues by streamlining the process from order collection to billing.</li>
            <li><strong>Tech Stack:</strong> React, Express.js, PostgreSQL</li>
       
          </ul>
           </td>
        <td>May 2024–Jun 2024</td>
      </tr>
    </table>
  </div>

  <!-- Positions -->
<div class="section">
  <div class="section-title">Positions of Responsibility</div>
  <table class="edu-table">
    <tr>
      <td><strong>TechOps Organizer – CEG Tech Forum</strong>
        <ul>
          <li>Contributed to the development of the <strong>Kurukshetra tech fest</strong> web portal, allowing participants to explore events, manage accommodations, and registeration.</li>
          <li>Co-developed <strong>Deep Sea Mysteries</strong>, an interactive online puzzle-solving event under Kurukshetra.</li>
          <li><strong>Tech Stack:</strong> React, Express.js, PostgreSQL</li>
        </ul>
      </td>
      <td>Sep 2024–Apr 2025</td>
    </tr>
    <tr>
      <td><strong>CUIC Placement Portal Maintainer</strong>
        <ul>
          <li>Implementing new features proposed by CUIC and handle regular maintainance of the portal.</li>
          <li><strong>Tech Stack:</strong> React, Express.js, PostgreSQL</li>
        
        </ul>
      </td>
      <td>May 2025–Present</td>
    </tr>
  </table>
</div>

  <!-- Skills -->
  <div class="section">
    <div class="section-title">Skills</div>
    <ul>
      <li><strong>Technical:</strong> C/C++, Java, Python, React.js, Express.js, PostgreSQL</li>
      <li><strong>Soft Skills:</strong> Teamwork, Self-Learning, Adaptability</li>
    </ul>
  </div>
  <div class="section">
    <div class="section-title">Co-curricular Activites</div>
    <p>Football, NSS volunteer</p>
  </div>

</body>
</html>`,}, 
];
