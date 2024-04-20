"use client";

import Link from "next/link";
import { HandCoins, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import {useState} from "react";




function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prevState) => !prevState);
  const closeMenu = () => setMenuOpen(false);
  const path = usePathname();
  const status = "auth";
  const links = [
    { name: "Incomes", href: "/incomes" },
    { name: "Expenses", href: "/expenses" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <>
      <header className="bg-white overflow-hidden">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link href="/">
                <HandCoins className="text-blue-500" size={44} />
              </Link>
            </div>
            <div className="hidden md:block">
              {status !== "unauth" && (
                <nav aria-label="Global">
                  <ul className="flex items-center gap-6 text-sm">
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`"text-zinc-500 hover:text-zinc-800 transition-colors font-bold ${
                            link.href === path ? "text-blue-500" : "text-zinc-400"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
            <div className="flex items-center gap-4">
              {status === "unauth" ? (
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/login"
                  >
                    Login
                  </Link>
                </div>
              ) : (
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/logout"
                  >
                    Logout
                  </Link>
                </div>
              )}
              <div className="block md:hidden">
                {status !== "unauth" && (
                  <button
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                    onClick={toggleMenu}
                  >
                    <Menu />
                  </button>
                )}
                {menuOpen && status !== "unauth" && (
                  <div className="flex justify-center items-center absolute left-0 right-0 mt-2 bg-white z-50 h-screen text-2xl ">
                    <ul className="w-screen">
                      {links.map((link) => (
                        <li key={link.href} className="w-full my-20">
                          <Link
                            onClick={closeMenu}
                            href={link.href}
                            className="block px-4 py-2 text-zinc-500 hover:text-blue-500 transition-colors text-center"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;



