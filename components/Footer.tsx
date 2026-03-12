import Link from "next/link";
import { TulipLogo } from "@/components/Navigation";

export default function Footer() {
  return (
    <footer className="bg-text-primary" style={{ padding: "64px clamp(20px, 5vw, 48px) 40px" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <TulipLogo color="#F7F5F0" size={20} />
              <span className="font-serif text-[18px] text-stone leading-none">
                Anderius
              </span>
            </div>
            <span className="font-sans text-[13px] font-light text-text-secondary mt-2 block">
              Marketing-Agentur für ästhetische Chirurgie
            </span>
          </div>

          {/* Center */}
          <div className="flex flex-col gap-3">
            {[
              { label: "Portfolio", href: "/work" },
              { label: "Philosophie", href: "/about" },
              { label: "Karriere", href: "/karriere" },
              { label: "Projekt starten", href: "/contact" },
              { label: "Impressum", href: "/impressum" },
              { label: "Datenschutz", href: "/datenschutz" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-[13px] text-text-secondary hover:text-stone transition-colors duration-300"
                style={{ fontWeight: 400 }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3">
            <a
              href="mailto:hello@anderius.de"
              className="font-sans text-[13px] text-text-secondary hover:text-stone transition-colors duration-300"
              style={{ fontWeight: 400 }}
            >
              hello@anderius.de
            </a>
            <span className="font-sans text-[13px] text-text-secondary" style={{ fontWeight: 400 }}>
              Frankfurt am Main, DE
            </span>
          </div>
        </div>

        {/* Bottom divider */}
        <div
          className="h-px w-full mt-16 mb-6"
          style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
        />
        <span
          className="font-sans text-[11px] font-light block"
          style={{ color: "rgba(107, 101, 96, 0.5)" }}
        >
          &copy; 2026 Anderius GmbH
        </span>
      </div>
    </footer>
  );
}
