import Image from "next/image";

const About = () => {
  return (
    <div className="p-4">
      <div className="p-4">
        <div className="flow-root">
          <div className="my-4">
            As a developer, I have always been passionate about creating elegant
            and effective solutions to complex problems. I have a strong
            foundation in software development, with a focus on web technologies
            such as HTML, CSS, and JavaScript. I enjoy working on both the
            front-end and back-end of applications, and I am always looking for
            ways to optimize performance, improve user experience, and ensure
            the highest level of code quality.
          </div>
        </div>
        <div className="flow-root">
          <div className="my-4">
            Dynamic Software Engineer with 2+ years of experience crafting
            scalable solutions in Golang, NodeJS, and more. Proven ability to
            architect microservices, integrate diverse databases, and leverage
            cloud platforms like GCP. Passionate about building user-centric
            applications and improving efficiency, as demonstrated at FuboTV by
            developing API endpoints serving 1 million+ users and building
            AI-powered video highlight features. Eager to contribute expertise
            and collaborate on innovative projects.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-500 p-4 rounded-lg">
          <i className="fab fa-html5 text-white"></i>
          <p className="text-white">HTML</p>
        </div>
        <div className="bg-green-500 p-4 rounded-lg">
          <i className="fab fa-css3-alt text-white"></i>
          <p className="text-white">CSS</p>
        </div>
        <div className="bg-yellow-500 p-4 rounded-lg">
          <i className="fab fa-js-square text-white"></i>
          <p className="text-white">JavaScript</p>
        </div>
        <div className="bg-indigo-500 p-4 rounded-lg">
          <i className="fab fa-react text-white"></i>
          <p className="text-white">React</p>
        </div>
        <div className="bg-purple-500 p-4 rounded-lg">
          <i className="fab fa-node-js text-white"></i>
          <p className="text-white">Node</p>
        </div>
      </div>
    </div>
  );
};

export default About;
