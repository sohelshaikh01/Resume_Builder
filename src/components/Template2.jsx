import React from "react";

const Template2 = ({ resume }) => {
  return (
    <div
      id="resume-preview"
      className="max-w-[794px] h-auto overflow-hidden mx-auto p-5 border border-black bg-white text-left flex flex-col box-border"
      style={{ pageBreakInside: "avoid" }}
    >
      {/* Left Section (Details & Education) */}
      <div className="flex w-full">
        <div className="w-2/5 pr-4">
          <h2 className="font-bold uppercase border-b pb-1 mb-2">Details</h2>
          <p>{resume[0].details.phoneNo}</p>
          <p>{resume[0].details.email}</p>
          <p>{resume[0].details.linkedIn}</p>

          <h2 className="mt-5 font-bold uppercase border-b pb-1 mb-2">Education</h2>
          <p>{resume[1].education.degree}</p>
          <p>{resume[1].education.institution} ({resume[1].education.passingYear})</p>
          <p>Grades: {resume[1].education.grades}</p>
        </div>

        {/* Right Section (Full Name, Experience, Projects, Skills) */}
        <div className="w-3/5 pl-4">
          <h1 className="text-2xl font-bold text-right">{resume[0].details.fullName}</h1>

          <h2 className="mt-5 font-bold uppercase border-b pb-1 mb-2">Experience</h2>
          <p>{resume[2].experience.jobTitle} at {resume[2].experience.companyTitle}, {resume[2].experience.address}</p>
          <p>{resume[2].experience.keyResponsibilities}</p>

          <h2 className="mt-5 font-bold uppercase border-b pb-1 mb-2">Projects</h2>
          <p>{resume[4].project.name}</p>
          <p>{resume[4].project.description}</p>
          <p>{resume[4].project.technologies}</p>
          <p><a href={resume[4].project.liveLink} target="_blank" className="text-blue-500">Live Project</a></p>

          <h2 className="mt-5 font-bold uppercase border-b pb-1 mb-2">Skills</h2>
          <p>{resume[3].skills.technicalSkills}</p>
          <p>{resume[3].skills.relevantSkills}</p>
        </div>
      </div>
    </div>
  );
};

export default Template2;
