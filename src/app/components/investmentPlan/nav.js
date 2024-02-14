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
        <div className={Styles.logo}>
          <h1>JA</h1>
          <p>academy</p>
        </div>
        <button className={Styles.toggleButton} onClick={toggleMenu}>
          <span className={`${Styles.toggleIcon} ${showMenu ? Styles.close : Styles.open}`}>
            <i className={`fas ${showMenu ? "fa-times" : "fa-bars"}`}></i>
          </span>
        </button>
      </div>
      <div className={`${Styles.navbar} ${showMenu ? Styles.showMenu : Styles.hidden}`}>
        <ul className={Styles.menuItems}>
          <li
            className={pathname === "/pages/investmentrplanview" ? Styles.active : ""}
            onClick={() => (handleNavRoute ? handleNavRoute("/") : router.push("/"))}
          >
            Home
          </li>
          <li
            className={pathname === "/pages/empty" ? Styles.active : ""}
            onClick={() => (handleNavRoute ? handleNavRoute("/pages/empty") : router.push("/pages/empty"))}
          >
            About
          </li>
          <li
            className={pathname === "/pages/empty" ? Styles.active : ""}
            onClick={() => (handleNavRoute ? handleNavRoute("/pages/empty") : router.push("/pages/empty"))}
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
