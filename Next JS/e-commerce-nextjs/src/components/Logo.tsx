import Image from "next/image";

import logoImage from "@/assets/logo.jpg";

export default function Logo() {
  return <Image src={logoImage} alt="Logo" width={100} height={100} />;
}
