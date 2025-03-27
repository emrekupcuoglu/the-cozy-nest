import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.png";

function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={className}>
      <Image priority className="h-28 w-28" src={logo} alt="logo" />
    </Link>
  );
}

export default Logo;
