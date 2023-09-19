import Link from "next/link";

import NavbarActions from "@/components/navbar-actions";
import MainNavbar from "./main-navbar";
import getCategories from "@/actions/get-categories";
import Container from "@/components/ui/container";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="sticky top-0 z-10  backdrop-filter backdrop-blur-lg bg-white bg-opacity-60">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNavbar data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
