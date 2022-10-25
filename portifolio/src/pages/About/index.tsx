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

  

  return (
    <>
      <Navbar />
      <C.Container>
        <C.About>
          <h1 data-aos="fade-in" data-aos-duration="500">
            Resume
          </h1>
          <p data-aos="fade-in" data-aos-duration="1500">
            I'm a web developer with more proficiency in Front-end. I like to
            learn the best technologies to create amazing websites. I have some
            knowledge on the backend too. I intend to be a Full-stack developer.
          </p>
          <p data-aos="fade-in" data-aos-duration="2000">
            <span>I live in: </span>
            Serra, ES.
          </p>
          <p data-aos="fade-in" data-aos-duration="2500">
            <span>I study: </span>
            Software Engineering at Unisales in Vitória, ES.
          </p>
          <p data-aos="fade-in" data-aos-duration="3000">
            <span>I am studying: </span>
            React ecosystem, A little bit of the Node ecosystem and English
            daily.
          </p>
          <p data-aos="fade-in" data-aos-duration="3500">
            <span>I look for: </span>
            An internship or a Jr position.
          </p>
          <p data-aos="fade-in" data-aos-duration="4000">
            <span>My curriculum: </span>
            <a target="blank" href="curriculum.pdf">
              PDF File <FaArrowRight />
            </a>
          </p>
          <p data-aos="fade-in" data-aos-duration="4500">
            <span>in free time: </span>to code, play the guitar, play football,
            work out and travel with the family.
          </p>
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
