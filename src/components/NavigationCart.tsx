import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { Button } from "./ui/button";

function NavigationCart() {
  return (
    <Link href="/cart">
      <div className="bg-background-light hover:bg-card-action rounded-full p-3 text-white hover:text-black">
        <BsCart className="h-6 w-6" />
      </div>
    </Link>
  );
}

export default NavigationCart;
