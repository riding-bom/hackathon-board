import { NavLink } from "react-router-dom";
import StyledButton from "../../../components/Button/StyledButton";

type navProps = {
  className: string;
};

const Nav = ({ className }: navProps) => {
  return (
    <ul className={className}>
      <li>
        <NavLink to="/">
          <StyledButton className="nav--button" children="ALL" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/poem">
          <StyledButton className="nav--button" children="POEM" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/novel">
          <StyledButton className="nav--button" children="NOVEL" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/essay">
          <StyledButton className="nav--button" children="ESSAY" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/write">
          <StyledButton className="nav--button" children="WRITE" />
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
