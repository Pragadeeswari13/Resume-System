import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import TemplateSelector from "./components/TemplateSelector";

function App() {
  const [resumeData, setResumeData] = useState({
    name: "Pragadeeswari P",
    email: "pragadeeswari13@gmail.com",
    phone: "+91 9500885275",
    location: "Tamil Nadu, India",
    linkedin: "https://www.linkedin.com/in/pragadeeswari-pa36755292/",
    github: "https://github.com/Pragadeeswari13",
    education: [
      { degree: "MCA", college: "A.V.C. College of Engineering", year: "2023-2025", cgpa: "8.2" },
      { degree: "B.Sc. Mathematics", college: "Dharmapuram Adhinam Arts College", year: "2020-2023", cgpa: "8.1" }
    ],
    skills: [
      "Java", "Python", "C", "HTML", "CSS", "JavaScript",
      "Node.js", "Express.js", "Spring Boot", "MySQL", "GitHub"
    ],
    internships: [
      {
        title: "CodSoft Virtual Internship (Web Development)",
        period: "Oct 2024 - Nov 2024",
        description:
          "Successfully completed internship at CodSoft, gaining hands-on experience in Web Development. Worked on projects involving HTML, CSS, and JavaScript. Developed and deployed Web applications, improving frontend and backend skills."
      },
      {
        title: "Java Full Stack Development Intern – Zidio Development",
        period: "May 2025 - Aug 2025",
        github: "https://github.com/Pragadeeswari13/Job_porta",
        description:
          "Developed a Job Portal web app using Spring Boot, MySQL, HTML, CSS, and JavaScript with JWT authentication, role-based access, and REST APIs. Built modules for job posting, applications, resume management, and admin monitoring, gaining hands-on experience in full-stack development."
      }
    ],
    projects: [
      {
        title: "Web-Based Examination Hall Arrangement System",
        desc: "Automates exam processes—student registration, seating, invigilation, and reporting."
      },
      {
        title: "Blood Bank Management System",
        desc: "MySQL-based system for donor and inventory management with request tracking."
      },
      {
        title: "Memory Matching Game (Web-Based)",
        technologies: "HTML, CSS, JavaScript, LocalStorage",
        github: "https://github.com/Pragadeeswari13/Memory_game",
        desc: "Built an interactive JavaScript memory game with multi-level grid logic, user authentication (LocalStorage), score tracking, and persistent stats."
      },
      {
        title: "Age Calculator (Web-Based)",
        technologies: "HTML, CSS, JavaScript",
        github: "https://github.com/Pragadeeswari13/Age_calculator",
        desc: "Developed a web app to calculate exact age from DOB with dark mode, responsive design, and dynamic DOM updates using JavaScript."
      }
    ]
  });

  const [template, setTemplate] = useState("modern");
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${resumeData.name}-Resume`,
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-6 bg-white shadow-lg overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">🎨 Customize Your Resume</h1>
        <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
        <TemplateSelector template={template} setTemplate={setTemplate} />
        <button
          onClick={handlePrint}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Download PDF
        </button>
      </div>

      <div className="w-full md:w-1/2 bg-gray-50 p-6">
        <ResumePreview ref={componentRef} data={resumeData} template={template} />
      </div>
    </div>
  );
}

export default App;
