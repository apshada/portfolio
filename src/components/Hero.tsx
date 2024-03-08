import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center py-16 md:py-24">
      <div className="w-full md:w-1/2 px-8 md:px-16">
        <h1 className="text-3xl font-bold mb-4">Hey, I'm Aditya </h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          I'm a software developer based in Bangalore, India. As a skilled Software Engineer, I have experience in Golang, NodeJS, and cloud platforms like GCP. I've built scalable solutions and microservices serving over 1 million users. My expertise includes databases (PostgreSQL, Redis), frameworks (ReactJS, Express), and video processing. I'm eager to leverage my skills for impactful projects.
        </p>
        <div className="flex items-center mt-4 md:mt-8">
          <a
            href="https://x.com/apshada1"
            className="text-blue-500 hover:underline mr-4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com/apshada"
            className="text-blue-500 hover:underline mr-4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/apshada1/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/images/profile.jpeg"
          className="rounded-full mx-auto md:mx-0" // Center on mobile, left-align on desktop
          width={300}
          height={300}
          alt="Aditya's personal headshot"
        />
      </div>
    </div>
  );
};

export default Hero;
