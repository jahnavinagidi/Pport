import "./App.css";
import { GoPerson } from "react-icons/go";
import { RiTimeLine } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import { motion } from "motion/react";
import { FaGraduationCap } from "react-icons/fa";
import { LuGraduationCap, LuHeadphones, LuLaptop } from "react-icons/lu";

function AboutMe() {
  return (
    <motion.div
      className="projects"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="about" id="about">
        <span className="section-heading">
          {" "}
          About{"\u00A0"}
          <div className="gradient"> Phani Raghavendra </div>
        </span>
        <div className="About-image-container">
          <img className="About-img" src="phani.jpeg" />
        </div>

        <div className="About-status-container">
          <div className="About-status">
            <div className="status-icon">
              <LuLaptop
                style={{
                  color: "#e66465",
                  display: "inline-flex",
                  verticalAlign: "middle",
                  fontSize: "23px",
                }}
              />
            </div>
            <div>Currently Working on: </div>{" "}
            <span className="gradient"> FocusDev </span>
          </div>

          <div className="About-status">
            <div className="status-icon">
              <LuGraduationCap
                style={{
                  color: "#e66465",
                  display: "inline-flex",
                  verticalAlign: "middle",
                  fontSize: "23px",
                }}
              />
            </div>
            <div> Currently learning: </div>{" "}
            <span className="gradient"> TailwindCSS </span>
          </div>

          <div className="About-status">
            <div className="status-icon">
              <LuHeadphones
                style={{
                  color: "#e66465",
                  display: "inline-flex",
                  verticalAlign: "middle",
                  fontSize: "23px",
                }}
              />
            </div>
            <div> Current Music Obsession: </div>{" "}
            <span className="gradient"> Lo-Fi </span>
          </div>
        </div>

        <div className="About-text">
          <div className="About-paragraph">
            <span className="About-para-title">
              {" "}
              <GoPerson id="about-icon" />{" "}
              <span className="gradient"> About Me </span>{" "}
            </span>

            <span className="About-paragraph-text">
              Hi, I’m Phani 👋 — a Full Stack Java Developer who loves turning
              ideas into real, working products. Over the last 5+ years, I’ve
              built everything from scalable backend systems in Java & Spring
              Boot to intuitive frontends in React and Angular.
              <span className="highlight-1">
                {" "}
                I enjoy solving tricky problems — whether it’s making apps load
                faster, keeping systems secure, or making sure an API can handle
                millions of requests without breaking. I’ve worked with cloud
                platforms like AWS, built CI/CD pipelines to make deployments
                smoother, and tuned databases so apps run lightning-fast.
              </span>
            </span>
          </div>

          <div className="About-paragraph">
            <span className="About-para-title">
              {" "}
              <RiTimeLine id="about-icon" />{" "}
              <span className="gradient"> My Journey </span>{" "}
            </span>

            <span className="About-paragraph-text">
              I started my tech path with a Bachelor’s in Computer Science,
              where I first discovered my love for Java. My career began at
              Genpact, fixing real-world issues that taught me discipline and
              problem-solving. At HCL and Mindtree, I grew into building
              enterprise apps with Spring Boot, APIs, and cloud integrations.
              Walgreens and the State of New Jersey gave me the chance to craft
              scalable systems used by thousands daily.
              <span className="highlight-1">
                {" "}
                At T-Mobile, I worked on customer portals that directly impacted
                millions of users nationwide. Along the way, I mastered both
                backend performance and frontend creativity with React and
                Angular. Today, with 5+ years of experience, I’m driven by one
                goal: building software that makes life simpler and smarter.{" "}
              </span>
            </span>
          </div>

          {/*  <div className="About-paragraph">
            <span className="About-para-title">
              {" "}
              <IoGameController
                id="about-icon"
                style={{ verticalAlign: "middle" }}
              />{" "}
              <span className="gradient"> My Hobbies & Personal Life </span>{" "}
            </span>

            <span className="About-paragraph-text">
              I'm an avid techie - I spend most of my time tinkering with new
              technologies, even outside of web development. <br></br>I like to
              build computers as a hobby, and keep up to date with the latest
              tech news. I also enjoy single-player games, such as{" "}
              <span className="highlight-1"> 'The Elder Scrolls' </span> series,
              and binge watch movies like{" "}
              <span className="highlight-1"> 'The Lord of the Rings'. </span>
            </span>
          </div> */}

          {/* <div className="About-paragraph">
            <span className="About-para-title">
              {" "}
              <FaGraduationCap
                id="about-icon"
                style={{ verticalAlign: "middle" }}
              />{" "}
              <span className="gradient"> What I'm doing now </span>{" "}
            </span>

            <span className="About-paragraph-text">
              Today, after graduating last year, I'm making my own projects and
              constantly evolving my frontend and backend skills. Some of the
              new technologies I've been looking into include{" "}
              <span className="highlight-1">
                GraphQL and libraries like React-DnD and GSAP.
              </span>
              <br></br>
              <br></br>
              <span className="gradient" id="para-finish">
                I'm also working on a few projects, including this website, my
                blog, FocusDev and more.{" "}
              </span>
            </span>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
