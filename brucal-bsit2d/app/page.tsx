import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to My Portfolio</h1>

      <div className="card-grid">
        <Link href="/projects" className="card">
          Projects
        </Link>

        <Link href="/skills" className="card">
          Skills
        </Link>

        <Link href="/resume" className="card">
          Resume
        </Link>
      </div>
    </main>
  );
}