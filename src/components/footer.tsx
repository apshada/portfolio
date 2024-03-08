const Footer = () => {
    return (
      <div className="py-4">
        <div className="container mx-auto flex justify-center items-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Aditya's Portfolio
          </p>
          <div className="ml-4 space-x-4">
            <a
              href="https://x.com/apshada1"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/apshada"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/apshada1/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  