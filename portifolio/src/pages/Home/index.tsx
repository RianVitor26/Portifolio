import * as C from "./styles";
import { Navbar } from "../../components/Navbar";
import { Toastify } from "../../components/Toastify";
import { Footer } from "../../components/Footer";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";


export const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Navbar />
      <C.Container>
        <Toastify />
        <C.Perfil data-aos="zoom-in"></C.Perfil>
        <h1 data-aos="fade-up-right">Rian Vitor</h1>
        <h2 data-aos="fade-up-right">Developer 💜</h2>
        <C.Resume data-aos="fade-up">
          <h3>
            Rian is a technology lover, he is a <span>front-end developer </span>
            with a foot in the <span>back-end</span>. Focused on the best
            technologies using <span>JavaScript</span>
          </h3>
        </C.Resume>
      </C.Container>
      <Footer />
    </>
  );
};
