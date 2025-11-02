import React from "react";

const ResumePreview = React.forwardRef(({ data, template }, ref) => {
  const { name, email, phone, location, linkedin, github, education, skills, internships, projects } = data;

  const headerClass =
    template === "modern"
      ? "bg-gradient-to-r from-indigo-500 to-blue-400 text-white p-4 rounded"
      : "p-4 bg-gray-100";

  return (
    <div ref={ref} className="max-w-full bg-white shadow-md p-6 rounded-md">
      {/* Header */}
      <div className={headerClass}>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-sm mt-1">{email} | {phone} | {location}</p>
        <p className="text-sm">
          <a href={linkedin} className="underline" target="_blank" rel="noreferrer">LinkedIn</a> |{" "}
          <a href={github} className="underline" target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </div>

      {/* Education */}
      <section className="mt-4">
        <h3 className="font-semibold text-lg border-b pb-1 mb-2">Education</h3>
        {education.map((edu, i) => (
          <div key={i} className="mb-2">
            <p className="font-medium">{edu.degree} — {edu.college}</p>
            <p className="text-sm text-gray-600">{edu.year} | CGPA: {edu.cgpa}</p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mt-4">
        <h3 className="font-semibold text-lg border-b pb-1 mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <span key={i} className="text-sm px-3 py-1 bg-gray-200 rounded-full">{s}</span>
          ))}
        </div>
      </section>

      {/* Internship Experience */}
      <section className="mt-4">
        <h3 className="font-semibold text-lg border-b pb-1 mb-2">Internship Experience</h3>
        {internships.map((it, i) => (
          <div key={i} className="mb-3">
            <div className="flex justify-between items-center">
              <p className="font-medium">{it.title}</p>
              <p className="text-sm text-gray-500">{it.period}</p>
            </div>
            <p className="text-sm text-gray-700">{it.description}</p>
            {it.github && (
              <a href={it.github} target="_blank" rel="noreferrer" className="text-xs underline text-blue-600">
                {it.github}
              </a>
            )}
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mt-4">
        <h3 className="font-semibold text-lg border-b pb-1 mb-2">Projects</h3>
        {projects.map((p, i) => (
          <div key={i} className="mb-3">
            <p className="font-medium">{p.title}</p>
            <p className="text-sm text-gray-700">{p.desc}</p>
            {p.technologies && <p className="text-xs">Tech: {p.technologies}</p>}
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" className="text-xs underline text-blue-600">
                {p.github}
              </a>
            )}
          </div>
        ))}
      </section>
    </div>
  );
});

export default ResumePreview;
