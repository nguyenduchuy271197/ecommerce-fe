"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../../components/section-heading";
import { useCategoriesQuery } from "@/hooks/category/query";
import { ICategory } from "@/types";

function CategoryCard({ id, name, image }: ICategory) {
  return (
    <li>
      <div className="relative block group aspect-square w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:opacity-90"
        />

        <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <Button className="mt-1.5" size="lg" asChild>
            <Link href={`/${id}`}>Shop Now</Link>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default function CategoriesGrid() {
  const categories = [
    {
      id: "1",
      slug: "shirts",
      thumbnail:
        "https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Shirts",
    },
    {
      id: "2",
      slug: "pants",
      thumbnail:
        "https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Pants",
    },
    {
      id: "3",
      slug: "glasses",
      thumbnail:
        "https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Glasses",
    },
  ];

  const { data, isLoading } = useCategoriesQuery();
  return (
    <section>
      <div className="container">
        <div className="space-y-8">
          <SectionHeading heading="Categories" />
          <ul className="grid sm:grid-cols-2 gap-8">
            {data?.categories?.map((c) => (
              <CategoryCard key={c.id} {...c} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
