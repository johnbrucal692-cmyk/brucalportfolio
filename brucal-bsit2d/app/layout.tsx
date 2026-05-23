"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  return (
    <html lang="en">
      <body>

        <header className="header">

          <nav className="navbar">
            <a href="/home" id="nav-logo">JP Brucal</a>

            <div className="links">

              <Link
                href="/home"
                className={pathname === "/home" ? "active" : ""}
              >
                Home
              </Link>

              <Link
                href="/aboutme"
                className={pathname === "/aboutme" ? "active" : ""}
              >
                About
              </Link>

              <Link
                href="/skills"
                className={pathname === "/skills" ? "active" : ""}
              >Skills</Link>

              <Link
                href="/projects"
                className={pathname === "/projects" ? "active" : ""}
              >Projects</Link>

              <Link
                href="/hobbies"
                className={pathname === "/hobbies" ? "active" : ""}
              >Hobbies</Link>

              <Link
                href="/education"
                className={pathname === "/education" ? "active" : ""}
              >Education</Link>

              <Link
                href="/achievements"
                className={pathname === "/achievements" ? "active" : ""}
              >Achievements</Link>

              <Link
                href="/resume"
                className={pathname === "/resume" ? "active" : ""}
              >Resume</Link>

              <Link
                href="/contact"
                className={pathname === "/contact" ? "active" : ""}
              >
                Contact
              </Link>

              <Link
                href="/gallery"
                className={pathname === "/gallery" ? "active" : ""}
              >Gallery</Link>

            </div>
          </nav>

        </header>

        <main className="container">{children}</main>

        <footer className="footer">
          <p>© JP Brucal. All rights reserved 2026.</p>
        </footer>

      </body>
    </html>
  );
}