import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./mobile-menu";
import PrimaryMenu from "./primary-menu";
import flexLogo from "./../public/flex_logo.svg";
export default function Header() {
  return (
    <header className="flex h-90px  items-center shadow-mobile text-gray-700 body-font fixed bg-white w-full  z-20 lg:shadow-header pr-20px md:pr-30px lg:pr-40px">
      <Link href="/" className="flex ml-4 md:ml-90px ">
        <span>
          <span className="sr-only">Flex</span>
          <Image
            src={flexLogo}
            priority
            // width={110}
            // height={71}
            alt="terms and conditions logo"
          />
        </span>
      </Link>

      <div className="w-full  md:mr-10 md:ml-auto flex justify-center">
        <PrimaryMenu />
        <MobileMenu />
      </div>
    </header>
  );
}
