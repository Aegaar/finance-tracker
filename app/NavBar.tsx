"use client";

import Link from "next/link";
import { HandCoins } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

function NavBar() {
  const path = usePathname();

  const links = [
    { name: "Dashboard", href: "/" },
    { name: "Expense history", href: "/expense-history" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center justify-between">
      <Link href="/">
        <HandCoins className="text-blue-500"/>
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li>
            <Link
              key={link.href}
              href={link.href}
              className={`"text-zinc-500 hover:text-zinc-800 transition-colors  font-bold ${
                link.href === path ? 'text-blue-500' : 'text-zinc-400'
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
