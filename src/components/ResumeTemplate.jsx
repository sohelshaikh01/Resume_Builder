import template1 from "../assets/Template_1.jpg";
import template2 from "../assets/Template_2.jpg";

const ResumeTemplate = ({ formData }) => {
  const selectedTemplate = localStorage.getItem("selectedTemplate") || "template1";
  const templateImage = selectedTemplate === "template1" ? template1 : template2;

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg text-gray-900">

      <h2 className="text-2xl font-bold text-center mb-4">Resume Preview</h2>
      {/* <img src={templateImage} alt="Selected Resume Template" className="w-full h-auto mb-4 rounded-md" /> */}
      


      <div className="space-y-4">
        {formData.map((section, index) => {
          const sectionKey = Object.keys(section)[0];
          const fields = section[sectionKey];
          return (
            <div key={index} className="border-b pb-4">
              <h3 className="text-xl font-semibold capitalize mb-2">{sectionKey}</h3>
              <ul className="list-disc list-inside">
                {Object.entries(fields).map(([key, value]) => (
                  <li key={key} className="text-gray-700">
                    <strong className="capitalize">{key}: </strong> {value || "N/A"}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResumeTemplate;