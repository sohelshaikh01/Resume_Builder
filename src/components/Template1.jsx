import React from "react";

const Template1 = ({ resume }) => {
  return (
    <div
      id="resume-preview"
      className="max-w-[794px] h-auto mx-auto p-5 overflow-hidden border border-black shadow-lg bg-white text-left text-xl flex flex-col box-border"
      style={{ pageBreakInside: "avoid" }}
    >
      {/* Top Section */}
      <div className="text-center mb-10 mt-6">
        <h1 className="text-3xl mb-2 font-bold border-b">{resume[0].details.fullName}</h1>
        <p className="mt-2">{resume[0].details.phoneNo} | {resume[0].details.email} | {resume[0].details.linkedIn}</p>
      </div>

      {/* Content Sections */}
      <div className="mb-8 mt-6">
        <h2 className="font-bold mb-2 uppercase border-b">Education</h2>
        <p>{resume[1].education.degree}</p>
        <p>{resume[1].education.institution} ({resume[1].education.passingYear})</p>
        <p>Grades: {resume[1].education.grades}</p>
      </div>

      <div className="mb-8 mt-6">
        <h2 className="font-bold mb-2 uppercase border-b">Experience</h2>
        <p>{resume[2].experience.jobTitle} at {resume[2].experience.companyTitle}, {resume[2].experience.address}</p>
        <p>{resume[2].experience.keyResponsibilities}</p>
      </div>

      <div className="mb-8 mt-6">
        <h2 className="font-bold mb-2 uppercase border-b">Skills</h2>
        <p>{resume[3].skills.technicalSkills}</p>
        <p>{resume[3].skills.relevantSkills}</p>
      </div>

      <div className="mb-8 mt-6">
        <h2 className="font-bold mb-2 uppercase border-b">Projects</h2>
        <p>{resume[4].project.name}</p>
        <p>{resume[4].project.description}</p>
        <p>{resume[4].project.technologies}</p>
        <p>
          <a href={resume[4].project.liveLink} target="_blank" className="text-blue-500">
            Live Project
          </a>
        </p>
      </div>
    </div>
  );
};

export default Template1;
