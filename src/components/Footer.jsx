import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6">

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left md:text-center">
        
        {/* Logo & Social Links */}
        <div className="flex flex-col items-start md:items-center gap-4">

          <Logo className="text-white w-12 h-12" />
          <div className="flex gap-4 mt-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="text-left md:text-center">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/create" className="hover:text-gray-300">Create Resume</Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-gray-300">Help</Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="text-left md:text-center">
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/terms" className="hover:text-gray-300">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center md:text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
