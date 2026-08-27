import { Menu, SearchIcon, User } from "lucide-react";
import Link from "next/link";

export const links = [
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Rankings",
    href: "/rankings",
  },
  {
    name: "Games",
    href: "/games",
  },
];

export default function Header() {
  return (
    <header className="px-4 py-4 backdrop-blur-md sticky w-full z-100 top-0">
      <div className="mx-auto flex max-w-400 w-full items-center justify-between">
        <nav aria-label="Main navigation" className="flex items-center gap-8">
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

          <ul className="flex items-center gap-4 max-md:hidden">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="
                    uppercase
                    font-bold
                    text-(--secondary-text)
                    transition-colors
                    duration-200
                    hover:text-(--primary-text)
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-(--accentColor)
                  "
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Search"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-md
              text-(--secondary-text)
              transition-colors
              duration-200
              hover:text-(--primary-text)
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-(--accentColor)
            "
          >
            <SearchIcon size={20} aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-label="Open profile"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-md
              max-md:hidden
              text-(--secondary-text)
              transition-colors
              duration-200
              hover:text-(--primary-text)
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-(--accentColor)
            "
          >
            <User size={20} aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-label="Mobile Menu"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-md
              md:hidden
              text-(--secondary-text)
              transition-colors
              duration-200
              hover:text-(--primary-text)
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-(--accentColor)
            "
          >
            <Menu size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
