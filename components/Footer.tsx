import Link from "next/link";
import LinkedInIcon from "@/components/LinkedInIcon";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="border-t py-10"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading font-semibold text-base tracking-tight transition-opacity duration-200 hover:opacity-70"
            style={{ color: "var(--color-foreground)", fontFamily: "var(--font-heading)" }}
          >
            Maria Alyeska
            <span style={{ color: "var(--color-accent)" }}>.</span>
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {[
              { href: "/", label: "Hjem" },
              { href: "/#om-meg", label: "Om meg" },
              { href: "/portfolio", label: "Portefølje" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200 hover:opacity-80"
                style={{ color: "var(--color-secondary)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/maria-alyeska-cabalan-60b46b231/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-80"
              style={{
                backgroundColor: "var(--color-muted)",
                color: "var(--color-foreground)",
                border: "1px solid var(--color-border)",
              }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={14} />
            </a>
            <a
              href="mailto:mariacabalan@outlook.com"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-80"
              style={{
                backgroundColor: "var(--color-muted)",
                color: "var(--color-foreground)",
                border: "1px solid var(--color-border)",
              }}
              aria-label="E-post"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-secondary)" }}>
            © {new Date().getFullYear()} Maria Alyeska Cabalan. Alle rettigheter forbeholdt.
          </p>
          <p className="text-xs flex items-center gap-1.5" style={{ color: "var(--color-secondary)" }}>
            Bygget med AI
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            Next.js
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
