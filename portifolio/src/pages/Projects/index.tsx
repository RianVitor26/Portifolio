import * as C from "./styles"
import { Navbar } from "../../components/Navbar";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";


export const Projects = () => {
  return (
    <>
      <Navbar />
      <C.Container>
        <Card
          src="comingsoon.jpg"
          alt=""
          title="Project title"
          stacks="React | JavaScript | Styled-conponents"
          desc=" Lorem ipsum, dolor sit amet consectetur adipisicing."
          link=""
        />
        <Card
          src="comingsoon.jpg"
          alt=""
          title="Project title"
          stacks="React | JavaScript | Styled-conponents"
          desc=" Lorem ipsum, dolor sit amet consectetur adipisicing."
          link=""
        />
        <Card
          src="comingsoon.jpg"
          alt=""
          title="Project title"
          stacks="React | JavaScript | Styled-conponents"
          desc=" Lorem ipsum, dolor sit amet consectetur adipisicing."
          link=""
        />
      </C.Container>
      <Footer />
    </>
  );
}
