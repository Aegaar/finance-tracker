"use client";

import Link from "next/link";
import { HandCoins, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

//TODO NAPRAWIĆ ZACHOWANIE NAVBARA PODCZAS PRÓBY WEJSCIA NA CHRONIONĄ SCIEZKE

function NavBar() {
  const { status, data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prevState) => !prevState);
  const closeMenu = () => setMenuOpen(false);
  const path = usePathname();
  const links = [
    { name: "Incomes", href: "/incomes" },
    { name: "Expenses", href: "/expenses" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  function handleSignOut() {
    signOut({
      callbackUrl: "/",
    });
  }

  return (
    <>
      <header className="bg-white overflow-hidden py-2">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link href="/">
                <HandCoins className="text-blue-500" size={44} />
              </Link>
            </div>
            <div className="hidden md:block">
              {status !== "unauthenticated" && (
                <nav aria-label="Global">
                  <ul className="flex items-center gap-6 ">
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`"text-zinc-500 hover:text-zinc-800 transition-colors font-bold ${
                            link.href === path
                              ? "text-blue-500"
                              : "text-zinc-400"
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
              {status === "unauthenticated" ? (
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-600 transition-colors"
                    href="/login"
                  >
                    Login
                  </Link>
                </div>
              ) : (
                <div className="sm:flex sm:gap-4">
                  <span
                    className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-600 transition-colors"
                    href="/"
                    onClick={handleSignOut}
                  >
                    Logout
                  </span>
                </div>
              )}
              {status !== "loading" && status === "authenticated" && (
                <Link href="/">
                  <Image
                    src={session.user.image}
                    width={35}
                    height={35}
                    alt="user image"
                    style={{
                      objectFit: "cover",
                      borderRadius: "100px",
                    }}
                  />
                </Link>
              )}
              <div className="block md:hidden">
                {status !== "unauthenticated" && (
                  <button
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                    onClick={toggleMenu}
                  >
                    <Menu />
                  </button>
                )}

                {menuOpen && status !== "unauthenticated" && (
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
