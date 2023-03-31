import styles from "./Navbar.module.scss";
import NavbarLink from "../NavLink/NavbarLink";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>

      <div className={styles.links}>
        <NavbarLink to="/utility" title="Utility" />
        <NavbarLink to="/css" title="CSS" />
        <NavbarLink to="/canvas" title="Canvas" />
        <NavbarLink to="/svg" title="SVG" />
        <NavbarLink to="/webgl" title="WebGL" />
      </div>
    </div>
  );
}
