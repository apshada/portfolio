import Image from "next/image";

const About = () => {
    return (
        <div className="about-skills-container">
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        As a developer, I have always been passionate about creating elegant and effective solutions to complex problems. I have a strong foundation in software development, with a focus on web technologies such as HTML, CSS, and JavaScript. I enjoy working on both the front-end and back-end of applications, and I am always looking for ways to optimize performance, improve user experience, and ensure the highest level of code quality.
                    </p>
                   <p>Dynamic Software Engineer with 2+ years of experience crafting scalable solutions in Golang, NodeJS, and more. Proven ability to architect microservices, integrate diverse databases, and leverage cloud platforms like GCP. Passionate about building user-centric applications and improving efficiency, as demonstrated at FuboTV by developing API endpoints serving 1 million+ users and building AI-powered video highlight features. Eager to contribute expertise and collaborate on innovative projects.</p>
                </div>
            </div>
        </div>
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="grid-skills">
                <div className="skill-card html">
                    <i className="fa-brands fa-html5 html-icon"></i>
                    <p>HTML</p>
                </div>
                <div className="skill-card css">
                    <i className="fa-brands fa-css3-alt css-icon"></i>
                    <p>CSS</p>
                </div>
                <div className="skill-card js">
                    <i className="fa-brands fa-js-square js-icon"></i>
                    <p>JavaScript</p>
                </div>
                <div className="skill-card react">
                    <i className="fa-brands fa-react react-icon"></i>
                    <p>React</p>
                </div>
                <div className="skill-card node">
                    <i className="fa-brands fa-node-js node-icon"></i>
                    <p>Node</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default About;