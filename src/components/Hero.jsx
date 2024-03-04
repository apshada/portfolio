import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/profile.jpeg' className="profile-img" width={300} height={300} alt="Aditya's personal headshot" />
            <div className="hero-text">
                <h1>Hey, I'm Aditya 👋</h1>
                <p>
                    I'm a software developer based in Banglore, India. Skilled Software Engineer with experience in Golang, NodeJS, and cloud platforms like GCP. Proven ability to build scalable solutions and microservices (1M+ users). Expertise in databases (PostgreSQL, Redis), frameworks (ReactJS, Express), and video processing. Eager to leverage skills for impactful projects..
                </p>
                <div className="social-icons">
                    <a
                        href="https://x.com/apshada1"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href="https://github.com/apshada"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/apshada1/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;