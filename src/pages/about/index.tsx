import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="about-content grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="text-content">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            As a developer, I have always been passionate about creating elegant
            and effective solutions to complex problems. I have a strong
            foundation in software development, with a focus on web technologies
            such as HTML, CSS, and JavaScript. I enjoy working on both the
            front-end and back-end of applications, and I am always looking for
            ways to optimize performance, improve user experience, and ensure
            the highest level of code quality.
          </p>
        </div>
        <div className="skills-list grid grid-cols-2 md:grid-cols-4 gap-4">
  <Image
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
    alt="Go Icon"
    width={50}
    height={50}
    className="mx-auto"
  />

  <Image
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
    alt="Node.js Icon"
    width={50}
    height={50}
    className="mx-auto"
  />

  <Image
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    alt="TypeSctipt Icon"
    width={50}
    height={50}
    className="mx-auto"
  />

  <Image
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    alt="Reactjs Icon"
    width={50}
    height={50}
    className="mx-auto"
  />

  <Image
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
    alt="Nextjs Icon"
    width={50}
    height={50}
    className="mx-auto"
  />

  <Image
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
    alt="Redis Icon"
    width={50}
    height={50}
    className="mx-auto"
  />

  <Image
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
    alt="Postgres Icon"
    width={50}
    height={50}
    className="mx-auto"
  />

<Image
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original-wordmark.svg"
    alt="Kafka Icon"
    width={50}
    height={50}
    className="mx-auto"
  />
</div>

      </div>
    </div>
  );
};

export default About;
