"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Hjem", code: "01" },
  { href: "/#om-meg", label: "Om meg", code: "02" },
  { href: "/#erfaring", label: "Erfaring", code: "03" },
  { href: "/portfolio", label: "Portefølje", code: "04" },
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
        backgroundColor: scrolled ? "rgba(247, 247, 245, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-70"
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "var(--color-foreground)" }}
          />
          <span
            className="font-medium text-sm tracking-tight"
            style={{
              color: "var(--color-foreground)",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.02em",
            }}
          >
            MARIA.ALYESKA
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative flex items-center gap-1.5 transition-all duration-200"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: isActive ? "var(--color-foreground)" : "var(--color-secondary)",
                }}
              >
                <span className="text-[10px] opacity-50">{link.code}</span>
                <span className="text-[12px] tracking-[0.05em]">
                  {link.label.toUpperCase()}
                </span>
                <span
                  className="absolute -bottom-1 left-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{
                    backgroundColor: "var(--color-foreground)",
                    width: isActive ? "100%" : "0%",
                  }}
                />
              </Link>
            );
          })}
          <a
            href="mailto:mariacabalan@outlook.com"
            className="text-[12px] tracking-[0.05em] px-4 py-2 transition-all duration-200 hover:opacity-80"
            style={{
              backgroundColor: "var(--color-foreground)",
              color: "var(--color-background)",
              fontFamily: "var(--font-mono)",
            }}
          >
            KONTAKT →
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 transition-colors duration-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle meny"
          style={{ color: "var(--color-foreground)" }}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-6 flex flex-col gap-4"
          style={{
            backgroundColor: "rgba(247, 247, 245, 0.97)",
            backdropFilter: "blur(14px)",
            borderColor: "var(--color-border)",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span className="text-[10px]" style={{ color: "var(--color-tertiary)" }}>
                {link.code}
              </span>
              <span
                className="text-sm tracking-[0.05em]"
                style={{ color: "var(--color-foreground)" }}
              >
                {link.label.toUpperCase()}
              </span>
            </Link>
          ))}
          <a
            href="mailto:mariacabalan@outlook.com"
            className="text-[12px] tracking-[0.05em] px-4 py-2.5 text-center transition-all duration-200 hover:opacity-80 mt-2"
            style={{
              backgroundColor: "var(--color-foreground)",
              color: "var(--color-background)",
              fontFamily: "var(--font-mono)",
            }}
          >
            KONTAKT →
          </a>
        </div>
      )}
    </header>
  );
}
