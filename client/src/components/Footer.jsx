import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Developer Watermark */}
          <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
            Developed by
            <a
              href="https://bilal-dev.vercel.app/"
              className="text-white hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bilal
            </a>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              Visit developer portfolio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
