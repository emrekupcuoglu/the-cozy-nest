import Link from "next/link";

function Navlink({
  children,
  href,
  onClick,
}: {
  children: string | React.ReactNode;
  href: string;
  onClick?: () => void;
}) {
  return (
    <Link
      onClick={onClick}
      className="hover:border-action w-24 basis-full border-b border-transparent"
      href={href}
    >
      {children}
    </Link>
  );
}

export default Navlink;
