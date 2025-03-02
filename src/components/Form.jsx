

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import html2pdf from "html2pdf.js";

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/500.css"; // Specific weight

import resume from "../components/resume.js";
import Template1 from "../components/Template1.jsx";
import Template2 from "../components/Template2.jsx";


const ResumeForm = () => {
  const [formData, setFormData] = useState(resume);
  const [showModal, setShowModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(
    localStorage.getItem("selectedTemplate") || "template1"
  );

  const resumeRef = useRef(null);

  const handleChange = (section, field, value) => {
    setFormData((prev) =>
      prev.map((item) =>
        item[section]
          ? { ...item, [section]: { ...item[section], [field]: value } }
          : item
      )
    );
  };

  const enhanceTextWithAI = async (section, field) => {
    const userInput = formData.find((item) => item[section])[section][field];
    
    try {
      const response = await fetch("https://api.example.com/enhance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: userInput }),
      });
      const data = await response.json();
      const enhancedText = data.enhancedText || userInput; 
      
      setFormData((prev) =>
        prev.map((item) =>
          item[section]
            ? { ...item, [section]: { ...item[section], [field]: enhancedText } }
            : item
        )
      );
    } catch (error) {
      console.error("AI enhancement failed", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const navigate = useNavigate(); // Initialize navigation

  const downloadPDF = () => {
      // Extract name from formData (adjust based on your form structure)
  const userName = formData.find(item => item.details)?.details.fullName || "Resume";

  // Clean the name (remove special characters, spaces, etc.)
  const cleanName = userName.replace(/[^a-zA-Z0-9]/g, "_");
    const element = document.getElementById("resume-preview"); // Ensure this ID exists in your preview modal
  
    html2pdf()
      .from(element)
      .set({
        margin: [10, 10, 10, 10], // Top, Left, Bottom, Right
        filename: `${cleanName}_Resume.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          windowWidth: element.scrollWidth, // Ensure full width is captured
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .save()
      .then(() => {
        // Delay navigation to ensure download starts first
        setTimeout(() => {
          navigate("/"); // Navigate to home
        }, 2000);
      });
  };



  return (

    <div className={` ${selectedTemplate === "template1" ? "bg-gray-100" : " bg-[#fffdf5]"} mt-16 py-8`}>

      <div className="font-poppins max-w-3xl mx-auto p-6 pt-10 bg-white shadow-lg shadow-gray-400 rounded-lg">

          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Resume Form</h2> 
          <form onSubmit={handleSubmit} className="space-y-6">

            {formData.map((sectionObj, index) => {
              const section = Object.keys(sectionObj)[0];
              const fields = sectionObj[section];

              return (
                <div key={index} className="p-6 border border-gray-300 rounded-lg shadow-md bg-gray-50">
                  <h3 className="text-lg font-semibold capitalize border-b pb-2 mb-4 text-gray-700">{section}</h3>

                  {Object.keys(fields).map((field) => (
                    <div key={field} className="mb-4">
                      <label className="block text-sm font-medium text-gray-600">{field}</label>

                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={fields[field]}
                          onChange={(e) => handleChange(section, field, e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                        
                        {(section === "experience" || section === "skills" || section === "project") &&
                          (field === "keyResponsibilities" ||
                            field === "technicalSkills" ||
                            field === "description") && (
                            <button
                              type="button"
                              onClick={() => enhanceTextWithAI(section, field)}
                              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                              Enhance
                            </button>
                          )}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}

            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
              Submit
            </button>
          </form>


        {/* Modal Preview */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full max-h-[80vh] overflow-auto">

              <div className="flex justify-between items-center mb-4 bg-blue-400 rounded-md text-white">
                <h2 className="text-xl font-bold"> Resume Preview</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className=" text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md cursor-pointer"
                  aria-label="Close Modal"
                >
                  ✖ </button>
              </div>

              {/* Resume Preview */}
              <div id="resume-preview">
                {selectedTemplate === "template1" ? (
                  <Template1 resume={formData} />
                ) : (
                  <Template2 resume={formData} />
                )}
              </div>

              {/* Buttons for Actions */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => {
                    const newTemplate = selectedTemplate === "template1" ? "template2" : "template1";
                    setSelectedTemplate(newTemplate);
                    localStorage.setItem("selectedTemplate", newTemplate);
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Swap Template </button>

                <button
                  onClick={() => downloadPDF()}
                  className="px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  Download PDF </button>
              </div>
              
            </div>
          </div>
        )}

      </div>
    
    </div>

    
  );
};

export default ResumeForm;