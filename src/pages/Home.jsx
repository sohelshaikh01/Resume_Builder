
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/500.css"; // Specific weight

import resumeBg from "../assets/Resume_bg.jpg";
import template1 from "../assets/Template_1.jpg";
import template2 from "../assets/Template_2.jpg";

const Home = () => {


    const navigate = useNavigate();
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const handleSelectTemplate = (template) => {
        setSelectedTemplate(template);
        localStorage.setItem("selectedTemplate", template); // Save selection
        navigate("/create"); // Navigate to create page
    };

    const scrollToTemplates = () => {
        const section = document.getElementById("templates-section");
        const offset = 55; // Adjust based on your navbar height
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
      
        window.scrollTo({
          top: sectionPosition,
          behavior: "smooth",
        });
    };
      


    return (

        <div className=" font-poppins mt-16">
            
            {/* Hero Section */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center h-screen lg:h-[100vh-300px] px-6 lg:px-8 py-4 bg-lime-50 gap-12">

                {/* Left Content */}
                <div className="max-w-2xl text-center lg:text-left py-4 ">

                    <h1 className="text-4xl font-bold mb-6 text-gray-800">
                        Build Resume with AI </h1>
                    <p className="text-lg text-gray-500 mb-6">
                        Create and enhance your resume with AI to make it the perfect fit for top companies. </p>

                    <div className="flex justify-center items-center lg:justify-start">

                        <button 
                            onClick={scrollToTemplates} 
                            className="px-4 py-2 text-white font-semibold rounded-3xl bg-cyan-800"> Explore Resume </button>

                        <span
                            onClick={scrollToTemplates}
                            className=" -ml-2 w-4 h-5 bg-cyan-800" > </span>

                        <button
                            onClick={scrollToTemplates}
                            className="px-3  -ml-2 py-2 text-white font-semibold rounded-full bg-cyan-800">
                                &#x27A4; </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="max-w-96 flex justify-center">
                    <img src={resumeBg} alt="Resume Builder" className="w-96 rounded-3xl shadow-xl" />
                </div>

            </div>

            {/* Images Section */}
            <div id="templates-section" className=" pt-10 py-12 px-6 lg:px-12 text-center bg-[#f3eeee]">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Choose Different Templates </h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {[template1, template2].map((template, index) => (
                        <div key={index} className="flex flex-col items-center justify-between">

                            <h2 className="text-2xl font-semibold mb-4" > Template {index + 1} </h2>

                            <img src={template} alt={`Template ${index + 1}`} className="w-[500px] h-auto rounded-lg shadow-lg shadow-gray-400" />

                            <button 
                                onClick={() => handleSelectTemplate(index === 0 ? "template1" : "template2")}
                                className="mt-4 px-4 py-2 text-white font-semibold rounded-full bg-cyan-700 hover:bg-cyan-800" >
                                    Create </button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}


export default Home;
