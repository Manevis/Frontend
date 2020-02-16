import React from "react";
import Link from "next/link";
import styles from './styles.scss';

const TopMenu = props => {
  return (
    <header className="container">
      <nav className={styles.topMenu}>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="Autor.ir"/>
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopMenu;
