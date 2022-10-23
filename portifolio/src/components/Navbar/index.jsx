import * as C from "./styles";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'

export const Navbar = () => {

  return (
    <C.Container>
      <FaBars />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </C.Container>
  );
};
