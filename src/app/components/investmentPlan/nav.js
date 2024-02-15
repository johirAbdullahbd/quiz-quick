import React, { useState } from "react";
import Styles from "./nav.module.css";
import { usePathname, useRouter } from "next/navigation";

const Navbar = ({ handleNavRoute }) => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={Styles.navbarContainer}>
      <div className={Styles.description}>
        <div>
          <h3 onClick={() => handleNavRoute("/")}>
            <span className={Styles.smallFontSize}>By</span> <span className={Styles.largeFontSize}>JA</span> Academy
          </h3>
        </div>

        <button className={Styles.toggleButton} onClick={toggleMenu}>
          <span className={`${Styles.toggleIcon} ${showMenu ? Styles.close : Styles.open}`}>
            <i className={`fas ${showMenu ? "fa-times" : "fa-bars"}`}></i>
          </span>
        </button>
      </div>
      <div className={`${Styles.navbar} ${showMenu ? Styles.showMenu : Styles.hidden}`}>
        <ul className={Styles.menuItems}>
          <li className={pathname === "/" ? Styles.active : ""} onClick={() => (handleNavRoute ? handleNavRoute("/") : router.push("/"))}>
            Home
          </li>
          <li
            className={pathname === "/pages/about" ? Styles.active : ""}
            onClick={() => (handleNavRoute ? handleNavRoute("/pages/about") : router.push("/pages/about"))}
          >
            About
          </li>
          <li
            className={pathname === "/pages/contact" ? Styles.active : ""}
            onClick={() => (handleNavRoute ? handleNavRoute("/pages/contact") : router.push("/pages/contact"))}
          >
            Contact
          </li>
          <li
            className={pathname === "/pages/getcertificate" ? Styles.active : ""}
            onClick={() => (handleNavRoute ? handleNavRoute("/pages/getcertificate") : router.push("/pages/getcertificate"))}
          >
            Certificate
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
