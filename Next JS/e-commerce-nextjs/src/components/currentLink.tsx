"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function CurrentLink(props: {
  link: { name: string; link: string };
}) {
  const pathname = usePathname();
  return (
    <Link
      href={props.link.link}
      className={
        props.link.link === pathname
          ? "font-bold text-blue-600"
          : "hover:underline hover:cursor-pointer"
      }
    >
      {props.link.name}
    </Link>
  );
}
