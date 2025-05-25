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
];
