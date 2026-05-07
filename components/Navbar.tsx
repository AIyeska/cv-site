"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Hjem" },
  { href: "/#om-meg", label: "Om meg" },
  { href: "/#erfaring", label: "Erfaring" },
  { href: "/portfolio", label: "Portefølje" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(250, 250, 248, 0.90)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading font-semibold text-lg tracking-tight transition-opacity duration-200 hover:opacity-70"
          style={{ color: "var(--color-foreground)" }}
        >
          Maria Alyeska
          <span style={{ color: "var(--color-accent)" }}>.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-all duration-200 relative group"
                style={{
                  color: isActive ? "var(--color-foreground)" : "var(--color-secondary)",
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    width: isActive ? "100%" : "0%",
                  }}
                />
              </Link>
            );
          })}
          <a
            href="mailto:eiriknerlie@gmail.com"
            className="text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:opacity-80"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-foreground)",
            }}
          >
            Ta kontakt
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md transition-colors duration-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle meny"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-6 flex flex-col gap-5"
          style={{
            backgroundColor: "rgba(250, 250, 248, 0.97)",
            backdropFilter: "blur(12px)",
            borderColor: "var(--color-border)",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium transition-colors duration-200"
              style={{ color: "var(--color-foreground)" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:eiriknerlie@gmail.com"
            className="text-sm font-medium px-4 py-2.5 rounded-full text-center transition-all duration-200 hover:opacity-80 mt-2"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-foreground)",
            }}
          >
            Ta kontakt
          </a>
        </div>
      )}
    </header>
  );
}
