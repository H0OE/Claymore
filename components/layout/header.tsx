import Link from "next/link";
import React from "react";
import Image from 'next/image'
import styles from "@/styles/components/page/header.module.css";
import { CartAlt } from "iconoir-react";


const Header = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href={"/home"} className={styles.brand_title}>
          <Image
            src='/images/logo.png'
            alt="Logo"
            width={70}
            height={100}
          />
          Claymore
        </Link>
        <div
          className={styles.toggle_button}
          onClick={() => {
            const NavLinks = document.getElementsByClassName("navbar_links")[0];
            NavLinks.classList.toggle("active");
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={styles.navbar_links}>
          <ul>
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/home">Pages</Link>
            </li>
            <li>
              <Link href="/home">About</Link>
            </li>
            <li>
              <Link href="/home">Services</Link>
            </li>
            <li>
              <Link href="/home">
                <CartAlt />
              </Link>
            </li>
            <li>
              <Link href="/home">Log In</Link>
            </li>
            <li>
              <Link href="/home">Sign In</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
