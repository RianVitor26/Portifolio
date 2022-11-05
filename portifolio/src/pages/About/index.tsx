import * as C from "./styles";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FaArrowRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  useEffect
} from "react";

export const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Navbar />
      <C.Container>
        <C.About>
          <h1 data-aos="fade-up" data-aos-duration="500">
            Resume
          </h1>
          <p data-aos="fade-up" data-aos-duration="1500">
            I'm a developer with more proficiency in Front-end. I like to learn
            the best technologies to create amazing websites. Currently studying
            <span> React, React Native and Node</span>. In order to become a
            <span> JavaScript developer</span> with knowledge in{" "}
            <span> web Full-Stack and Mobile development</span>.
          </p>
          <p data-aos="fade-up" data-aos-duration="2000">
            <span>I live in: </span>
            Serra, ES.
          </p>
          <p data-aos="fade-up" data-aos-duration="2500">
            <span>I study: </span>
            Software Engineering at Unisales in Vitória, ES.
          </p>
          <p data-aos="fade-up" data-aos-duration="3000">
            <span>I am studying: </span>
            React and React Native ecosystem, A little bit of the Node ecosystem
            and English daily.
          </p>
          <p data-aos="fade-up" data-aos-duration="3500">
            <span>I look for: </span>
            An internship or a Jr position.
          </p>
          <a
            data-aos="fade-left"
            data-aos-duration="4000"
            target="blank"
            href="curriculum.pdf"
          >
            SEE MY CURRICULUM
            <FaArrowRight />
          </a>
        </C.About>

        <h1 data-aos="fade-right">Technologies</h1>
        <C.Technologies>
          <C.Stack data-aos="fade-up">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <h2>HTML</h2>
          </C.Stack>
          <C.Stack data-aos="fade-up">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <h2>CSS</h2>
          </C.Stack>
          <C.Stack data-aos="fade-up">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <h2>JavaScript</h2>
          </C.Stack>
          <C.Stack data-aos="fade-up">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
            <h2>TypeScript</h2>
          </C.Stack>
          <C.Stack data-aos="fade-up">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <h2>React</h2>
          </C.Stack>
          <C.Stack data-aos="fade-up">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
            <h2>Redux</h2>
          </C.Stack>
          <C.Stack data-aos="fade-up">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
            <h2>Jest</h2>
          </C.Stack>
          <C.Stack data-aos="fade-up">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
            <h2>Sass</h2>
          </C.Stack>
          <C.Stack data-aos="fade-up">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            <h2>Node</h2>
          </C.Stack>
          <C.Stack data-aos="fade-up">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
            <h2>Express</h2>
          </C.Stack>
          <C.Stack data-aos="fade-up">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
            <h2>MySQL</h2>
          </C.Stack>
          <C.Stack data-aos="fade-up">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
            <h2>MongoDB</h2>
          </C.Stack>
          <C.Stack data-aos="fade-up">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            <h2>Git</h2>
          </C.Stack>
          <C.Stack data-aos="fade-up">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            <h2>Github</h2>
          </C.Stack>
          <C.Stack data-aos="fade-up">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
            <h2>Figma</h2>
          </C.Stack>
        </C.Technologies>
      </C.Container>
      <Footer />
    </>
  );
};
