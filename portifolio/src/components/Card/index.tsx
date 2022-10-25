import * as C from "./styles"
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { Fade } from "@mui/material";

type cardProps = {
  src: string,
  alt: string,
  title: string,
  stacks: string,
  desc: string,
  link: string,
}

export const Card = ({ src, alt, title, stacks, desc, link}: cardProps) => {
  
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <C.Card data-aos="fade-right">
      <C.CardImage>
        <img src={src} alt={alt} />
      </C.CardImage>
      <C.CardContent>
        <h1>{title}</h1>
        <h2>{stacks}</h2>
        <p>{desc}</p>
      </C.CardContent>
      <a href={link}>Go to Project</a>
    </C.Card>
  )
}
