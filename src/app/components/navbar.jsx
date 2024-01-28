// pages/index.js
import React from "react";
import Styles from "../styles/nav.module.css";
import { usePathname } from "next/navigation";
const Navbar = ({ handleNavRoute }) => {
  const pathname = usePathname();

  return (
    <div>
      <div className={Styles.description}>
        <div className={Styles.logo}>
          <h1>JA</h1>
          <p>academy</p>
        </div>
        <div className={Styles.navbar}>
          {/* Use Next.js Link component for client-side navigation */}
          <div className={pathname === "/pages/empty" ? Styles.active : Styles.link} onClick={() => handleNavRoute("/")}>
            {/* <a className={pathname === "/" ? "active" : ""}>Navbar</a> */}
            Home
          </div>

          <div className={pathname === "/pages/empty" ? Styles.active : Styles.link} onClick={() => handleNavRoute("/pages/empty")}>
            {/* <a className={pathname === "/about" ? "active" : ""}>About</a> */}
            About
          </div>

          <div className={pathname === "/pages/empty" ? Styles.active : Styles.link} onClick={() => handleNavRoute("/pages/empty")}>
            {/* <a className={pathname === "/contact" ? "active" : ""}>Contact</a> */}
            Contact
          </div>
          <div className={pathname === "/pages/getcertificate" ? Styles.active : Styles.link} onClick={() => handleNavRoute("/pages/getcertificate")}>
            {/* <a className={pathname === "/contact" ? "active" : ""}>Contact</a> */}
            Certificate
          </div>
          {/* Dropdown/Select for small screens */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
