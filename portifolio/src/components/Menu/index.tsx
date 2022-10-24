import * as C from "./styles";
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <C.Menu>
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
    </C.Menu>
  );
};
