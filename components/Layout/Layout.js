import React from 'react';
import Link from "next/link";

const Layout = ({children}) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
        </nav>
      </header>

      <main>
        {children}
      </main>

      <footer>
        This is footer
      </footer>
    </>
  )
};

export default Layout;
