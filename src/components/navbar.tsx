"use client";

import CartAction from "@/app/_components/cart-action";
import Logo from "@/components/logo";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import { getCategories } from "@/lib/api/category/queries";
import { supabaseClient } from "@/lib/supabaseClient";
import { useCategoriesQuery } from "@/hooks/category/queries";

export default function Navbar() {
  const { data } = useCategoriesQuery();

  return (
    <header className="border-b">
      <div className="container">
        <div className="flex items-center gap-12 h-16">
          {/* logo */}
          <Logo />

          {/* nav links */}
          <ul className="items-center gap-8 text-foreground/70 hidden md:flex">
            {data?.categories?.map((c) => (
              <li key={c.id}>
                <Link href={`/${c.id}`} className="hover:text-foreground">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* cart */}
          <div className="ml-auto flex items-center gap-2">
            <CartAction />
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
