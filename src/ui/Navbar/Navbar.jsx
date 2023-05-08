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
        <NavbarLink to="/ui" title="UI" />
        <NavbarLink to="/utility" title="Utility" />
        <NavbarLink to="/creative" title="Creative" />
      </div>
    </div>
  );
}
