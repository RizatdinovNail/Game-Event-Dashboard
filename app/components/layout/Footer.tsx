import Link from "next/link";
import { links } from "./Header";

const legalLinks = [
  {
    name: "Terms of Service",
    href: "/terms",
  },
  {
    name: "Privacy Policy",
    href: "/privacy",
  },
  {
    name: "Cookie Policy",
    href: "/cookies",
  },
];

const socialLinks = [
  {
    name: "Twitter",
    href: "/twitter",
  },
  {
    name: "Discord",
    href: "/discord",
  },
  {
    name: "YouTube",
    href: "/youtube",
  },
];

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="
        text-(--third-text)
        transition-colors
        duration-200
        hover:text-(--primary-text)
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-(--accentColor)
        focus-visible:ring-offset-2
        focus-visible:ring-offset-(--secondary-bg)
      "
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 bg-(--secondary-bg) border-t-2 border-t-[#27272A] px-4 py-8">
      <section className="mx-auto grid w-full max-w-400 gap-12 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="
            font-(family-name:--font-heading)
            text-3xl
            font-bold
            uppercase
            text-(--primary-text)
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-(--accentColor)
            "
          >
            <span className="text-(--accentColor)" aria-hidden="true">
              /
            </span>
            Apex
          </Link>
          <p className="text-(--third-text)">
            Follow competitive racing events, driver rankings, and championship
            results across a fictional motorsport platform.
          </p>
        </div>
        <nav aria-labelledby="footer-platform">
          <h2
            className="uppercase text-(--primary-text) font-bold pb-4"
            id="footer-platform"
          >
            Platform
          </h2>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <FooterLink href={link.href}>{link.name}</FooterLink>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-labelledby="footer-legals">
          <h2
            className="uppercase text-(--primary-text) font-bold pb-4"
            id="footer-legals"
          >
            Legal
          </h2>
          <ul className="space-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <FooterLink href={link.href}>{link.name}</FooterLink>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-labelledby="footer-social">
          <h2
            className="uppercase text-(--primary-text) font-bold pb-4"
            id="footer-social"
          >
            Social
          </h2>
          <ul className="space-y-2">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--third-text) hover:text-(--primary-text) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accentColor) transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section className="mx-auto flex w-full max-w-400 justify-between border-t-2 border-t-[#27272A] pt-4 text-(--third-text) text-sm max-md:flex-col items-center">
        <p>© 2026 Apex Racing Hub. All rights reserved.</p>
        <p>This is a fictional portfolio project.</p>
      </section>
    </footer>
  );
}
