import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.png";

function Logo() {
  return (
    <Link href="/">
      <Image priority className="h-28 w-28" src={logo} alt="logo" />
    </Link>
  );
}

export default Logo;
