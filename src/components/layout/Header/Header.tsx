import Image from "next/image";
import Link from "next/link";

import { routes } from "@/common/utils/routes";
import { Navigation } from "@/components/layout/Header/Navigation";
import { Search } from "@/components/layout/Header/Search";
import { UserActions } from "@/components/layout/Header/UserActions";

export const Header = () => {
  return (
    <div className="flex items-center justify-between gap-10">
      <Link href={routes.home}>
        <Image src="/logo.svg" alt="Logo" width={159} height={25} priority />
      </Link>
      <Navigation />
      <Search />
      <UserActions />
    </div>
  );
};
