import Link from "next/link";
import Image from "next/image";
import { HandCoins } from "lucide-react";

function NavBar() {
  const links = [
    { name: "Dashboard", href: "/" },
    { name: "Expense history", href: "/expense-history" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center justify-between">
      <Link href="/">
        <HandCoins />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li>
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-400 hover:text-zinc-800 transition-colors  font-bold"
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
