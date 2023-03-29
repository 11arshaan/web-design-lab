import styles from "./NavbarLink.module.scss";
import { NavLink } from "react-router-dom";

export default function NavbarLink({ to = "/", title = "woo" }) {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isActive ? styles.activeLinkContainer : styles.linkContainer
      }
    >
     {title}
    </NavLink>
  );
}
