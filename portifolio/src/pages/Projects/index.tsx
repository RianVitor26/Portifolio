import * as C from "./styles"
import { Navbar } from "../../components/Navbar";
import { Card } from "../../components/Card";


export const Projects = () => {
  return (
    <>
      <Navbar />
      <C.Container>
        <Card
          src="test.png"
          alt=""
          title="Project title"
          stacks="React | JavaScript | Styled-conponents"
          desc=" Lorem ipsum, dolor sit amet consectetur adipisicing."
          link=""
        />
        <Card
          src="test.png"  
          alt=""
          title="Project title"
          stacks="React | JavaScript | Styled-conponents"
          desc=" Lorem ipsum, dolor sit amet consectetur adipisicing."
          link=""
        />
        <Card
          src="test.png"
          alt=""
          title="Project title"
          stacks="React | JavaScript | Styled-conponents"
          desc=" Lorem ipsum, dolor sit amet consectetur adipisicing."
          link=""
        />
      </C.Container>
    </>
  );
}
