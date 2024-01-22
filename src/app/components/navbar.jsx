// pages/index.js
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Styles from "../styles/nav.module.css";
import { usePathname } from "next/navigation";
const Navbar = () => {
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
          <div className={pathname === "/pages/empty" ? Styles.active : Styles.link}>
            <Link href="/">
              {/* <a className={pathname === "/" ? "active" : ""}>Navbar</a> */}
              Home
            </Link>
          </div>

          <div className={pathname === "/pages/empty" ? Styles.active : Styles.link}>
            <Link href="/pages/empty">
              {/* <a className={pathname === "/about" ? "active" : ""}>About</a> */}
              About
            </Link>
          </div>

          <div className={pathname === "/pages/empty" ? Styles.active : Styles.link}>
            <Link href="/pages/empty">
              {/* <a className={pathname === "/contact" ? "active" : ""}>Contact</a> */}
              Contact
            </Link>
          </div>
          <div className={pathname === "/pages/getcertificate" ? Styles.active : Styles.link}>
            <Link href="/pages/getcertificate">
              {/* <a className={pathname === "/contact" ? "active" : ""}>Contact</a> */}
              Certificate
            </Link>
          </div>
          {/* Dropdown/Select for small screens */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
