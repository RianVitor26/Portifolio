import * as C from "./styles";
import { Navbar } from "../../components/Navbar";
import { Toastify } from "../../components/Toastify";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <C.Container>
        <Toastify />
        <C.Perfil></C.Perfil>
        <h1>Rian Vitor</h1>
        <h2>Front-end Developer 💜</h2>
        <C.Resume>
          <h3>
            Rian is a technology lover, he is a front-end developer with a foot
            in the <span>backend</span>. Focused on the best web technologies
          </h3>
        </C.Resume>
      </C.Container>
      <Footer />
    </>
  );
};
