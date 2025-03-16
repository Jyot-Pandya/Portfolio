const Header = () => {
    return (
      <header className="fixed top-0 w-full bg-white shadow-md p-4 z-50">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-xl font-bold">Jyot Pandya</h1>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
