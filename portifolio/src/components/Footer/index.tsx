import * as C from "./styles";

export const Footer = () => {
  return (
    <C.Footer>
      <C.MediasContainer>
        <C.Media>
          <a
            target="blank"
            href="https://www.linkedin.com/in/rian-vitor-a036aa202/"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
            <span>Linkedin</span>
          </a>
        </C.Media>
        <C.Media>
          <a target="blank" href="https://github.com/RianVitor26">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            <span>Github</span>
          </a>
        </C.Media>
      </C.MediasContainer>
      <C.Powered>
        <p>Powered with</p>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <p>By RianVitor26</p>
      </C.Powered>
    </C.Footer>
  );
};
