import CurrentLink from "./currentLink";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/services/auth";
const navbarLinks = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
  { name: "Categories", link: "/categories" },
];

export default async function Navbar() {
  const session = await auth();
  return (
    <>
      <Box className="w-full flex justify-between items-center px-8 py-4">
        <ul className="flex gap-8 text-xl text-blue-300 ">
          {navbarLinks.map((navItem) => (
            <CurrentLink key={navItem.link} link={navItem} />
          ))}
        </ul>
        <Box className="flex items-center gap-6">
          <Link href="/cart">
            <Box className="relative inline-block">
              <ShoppingCartIcon
                fontSize="large"
                className="text-white hover:cursor-pointer"
              />
              <Box className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                3
              </Box>
            </Box>
          </Link>

          {session?.user ? (
            <Link href="/api/auth/signout">
              <Box className="flex items-center gap-2">
                <Image
                  src={session.user.image || "/default-avatar.png"}
                  alt={session.user.name || "User"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-white hover:text-blue-300">Logout</span>
              </Box>
            </Link>
          ) : (
            <Link href="/api/auth/signin">
              <span className="text-white hover:text-blue-300">Login</span>
            </Link>
          )}
        </Box>
      </Box>
    </>
  );
}
