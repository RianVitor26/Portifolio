import * as C from "./styles";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'
import { useState } from "react";
import { Menu } from '../Menu'

export const Navbar = () => {

  const [displayMenu, setDisplayMenu] = useState(false)
  
  const toggleMenu = () => {
    displayMenu === false ? setDisplayMenu(true) : setDisplayMenu(false)
  }

  return (
    <C.Container>
      <FaBars onClick={toggleMenu} />
      {displayMenu ? <Menu /> : null}
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
