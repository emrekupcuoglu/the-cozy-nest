import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";

import logo from "@/../public/logo.png";
import Link from "next/link";

function Footer() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-8">
        <div className="flex justify-center">
          <div className="relative aspect-square h-44">
            <Image
              src={logo}
              alt="cozy nest logo"
              className="object-cover"
              fill
            />
          </div>
        </div>
        <div className="grid grid-cols-3 justify-items-center">
          <div>
            <h3 className="pb-4 font-bold">About</h3>
            <ul className="flex flex-col gap-1">
              <li>
                <Link href="">Our Company</Link>
              </li>

              <li>
                <Link href="">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="pb-4 font-bold">Information</h3>
            <ul className="flex flex-col gap-1">
              <li>
                <Link href=""></Link>
                Delivery
              </li>

              <li>
                <Link href=""></Link>
                Privacy Policy
              </li>

              <li>
                <Link href="">Terms and Conditions</Link>
              </li>

              <li>
                <Link href=""></Link>
                Return Policy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="pb-4 font-bold">Support</h3>
            <ul className="flex flex-col gap-1">
              <li>
                <Link href=""></Link>
                Contact Us
              </li>

              <li>
                <Link href=""></Link>
                Help
              </li>

              <li>
                <Link href="">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-background-hero flex items-center justify-around py-12 text-white max-sm:flex-col max-sm:gap-4">
        <h3 className="capitalize max-sm:flex max-sm:flex-col max-sm:items-center">
          Copyrights The Cozy Nest 2025. <span> All Rights Reserved.</span>
        </h3>
        <div className="flex items-center gap-2">
          <Link
            href=""
            aria-label="To Instagram account"
            className="bg-background-light rounded-full p-2"
          >
            <IoLogoInstagram />
          </Link>
          <Link
            href=""
            aria-label="To Twitter/X account"
            className="bg-background-light rounded-full p-2"
          >
            <RiTwitterXFill />
          </Link>
          <Link
            href=""
            aria-label="To Facebook account"
            className="bg-background-light rounded-full p-2"
          >
            <FiFacebook />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
