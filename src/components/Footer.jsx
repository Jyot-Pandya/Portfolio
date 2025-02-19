const Footer = () => {
    return (
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p className="text-sm">© {new Date().getFullYear()} Jyot Pandya. All rights reserved.</p>
        <p className="text-sm mt-2">
          Built with <span className="text-blue-400">React</span> & <span className="text-blue-400">Tailwind CSS</span>
        </p>
      </footer>
    );
  };
  
  export default Footer;
  