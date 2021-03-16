// Styling
import { ThemeButton, Logo, NavStyled, NavItem } from "../styles";

import { Link, NavLink } from "react-router-dom";
// Logo
import logo from "../logo.svg";

const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <Logo className="navbar-brand" to="/">
        <img src={logo} width="50" />
      </Logo>

      <div className="navbar-nav ml-auto">
        <NavItem to="/products" style={{ padding: 10 }}>
          Products
        </NavItem>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </NavStyled>
  );
};

export default NavBar;
