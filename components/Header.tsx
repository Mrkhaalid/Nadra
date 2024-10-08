import React, { Fragment } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex lg:justify-between items-center px-20 h-20 shadow-md">
      <Link href="/">
        <Image
          src="https://complaints.nadra.gov.pk/img/nadra_care_logo.svg"
          className="cursor-pointer lg:mx-0 md:mx-auto sm:mx-auto "
          alt="logo"
          width={200}
          loading="lazy"
          height={200}
        />
      </Link>
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-2">
          <li>
            <Link href="/RegisterComplaint">
              <Button
                variant={"link"}
                className="text-black font-light text-lg"
              >
                REGISTER COMPLAINT
              </Button>
            </Link>
          </li>
          <li>
            <Button
              variant="outline"
              className="text-secondary text-lg font-light h-12 rounded-full hover:bg-secondary hover:text-white"
            >
              COMPLAINT STATUS
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
