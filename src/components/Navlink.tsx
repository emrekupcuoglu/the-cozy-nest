import Link from "next/link";

function Navlink({
  children,
  href,
}: {
  children: string | React.ReactNode;
  href: string;
}) {
  return (
    <Link
      className="hover:border-action w-24 basis-full border-b border-transparent"
      href={href}
    >
      {children}
    </Link>
  );
}

export default Navlink;
