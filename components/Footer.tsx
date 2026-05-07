import Link from "next/link";
import LinkedInIcon from "@/components/LinkedInIcon";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-12"
      style={{
        backgroundColor: "var(--color-background)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-70 mb-4"
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--color-foreground)" }}
              />
              <span
                className="font-medium text-sm"
                style={{
                  color: "var(--color-foreground)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.02em",
                }}
              >
                MARIA.ALYESKA
              </span>
            </Link>
            <p
              className="text-xs leading-relaxed max-w-xs"
              style={{ color: "var(--color-secondary)" }}
            >
              Customer Success Manager som forenkler komplekse IT-miljøer,
              driver adopsjon av Microsoft Cloud — og bygger AI-løsninger.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p
              className="text-[10px] tracking-[0.25em] mb-4"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-tertiary)" }}
            >
              NAVIGATE
            </p>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: "/", label: "Hjem" },
                { href: "/#om-meg", label: "Om meg" },
                { href: "/#erfaring", label: "Erfaring" },
                { href: "/portfolio", label: "Portefølje" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-[0.05em] transition-colors duration-200 hover:text-[var(--color-foreground)]"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-secondary)" }}
                >
                  → {link.label.toUpperCase()}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[10px] tracking-[0.25em] mb-4"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-tertiary)" }}
            >
              CONNECT
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:mariacabalan@outlook.com"
                className="text-xs flex items-center gap-2 transition-colors duration-200 hover:text-[var(--color-foreground)]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-secondary)" }}
              >
                <Mail size={12} strokeWidth={1.4} />
                E-POST
              </a>
              <a
                href="https://www.linkedin.com/in/maria-alyeska-cabalan-60b46b231/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs flex items-center gap-2 transition-colors duration-200 hover:text-[var(--color-foreground)]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-secondary)" }}
              >
                <LinkedInIcon size={12} />
                LINKEDIN
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p
            className="text-[10px] tracking-[0.2em]"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-tertiary)" }}
          >
            © {new Date().getFullYear()} · MARIA ALYESKA CABALAN · ALL RIGHTS RESERVED
          </p>
          <p
            className="text-[10px] tracking-[0.2em] flex items-center gap-2"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-tertiary)" }}
          >
            <span>BUILT_WITH</span>
            <span className="w-1 h-1" style={{ backgroundColor: "var(--color-foreground)" }} />
            <span>AI · NEXT.JS · TAILWIND</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
