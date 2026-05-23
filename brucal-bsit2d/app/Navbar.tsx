"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./globals.css"

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <header className="header">
      <nav className="navbar">
        <Link href="/home" id="nav-logo">
          JP Brucal
        </Link>

        <div className="links">
          <Link href="/home" className={isActive("/home") ? "active" : ""}>
            Home
          </Link>

          <Link href="/aboutme" className={isActive("/aboutme") ? "active" : ""}>
            About
          </Link>

          <Link href="/skills" className={isActive("/skills") ? "active" : ""}>
            Skills
          </Link>

          <Link href="/projects" className={isActive("/projects") ? "active" : ""}>
            Projects
          </Link>

          <Link href="/hobbies" className={isActive("/hobbies") ? "active" : ""}>
            Hobbies
          </Link>

          <Link href="/education" className={isActive("/education") ? "active" : ""}>
            Education
          </Link>

          <Link href="/achievements" className={isActive("/achievements") ? "active" : ""}>
            Achievements
          </Link>

          <Link href="/resume" className={isActive("/resume") ? "active" : ""}>
            Resume
          </Link>

          <Link href="/contact" className={isActive("/contact") ? "active" : ""}>
            Contact
          </Link>

          <Link href="/gallery" className={isActive("/gallery") ? "active" : ""}>
            Gallery
          </Link>
        </div>
      </nav>
    </header>
  );
}