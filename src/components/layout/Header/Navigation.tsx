import Link from "next/link";

import { routes } from "@/common/utils/routes";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "On Sale", href: routes.onSale },
  { label: "New Arrivals", href: routes.newArrivals },
  { label: "Trousers", href: routes.trousers },
  { label: "Shirts", href: routes.shirts },
];

export const Navigation = () => {
  return (
    <nav className="flex items-center gap-4">
      {NAV_ITEMS.map(({ href, label }) => (
        <Link key={label} href={href}>
          <span className="text-nowrap hover:opacity-70">{label}</span>
        </Link>
      ))}
    </nav>
  );
};
