import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Heart, ShoppingCart } from "lucide-react";

interface ProductProps {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
}

export default function Product({ id, title, thumbnail, price }: ProductProps) {
  console.log(thumbnail || "https://i.imgur.com/R2PN9Wq.jpeg");
  return (
    <li>
      <div className="block group">
        <div className="relative">
          <div className="relative block h-[350px] sm:h-[450px] w-full overflow-hidden">
            <Image
              src={thumbnail || "https://i.imgur.com/R2PN9Wq.jpeg"}
              alt={title}
              className="object-cover transition duration-500 group-hover:scale-105"
              fill
            />
          </div>
          <Link
            href={`/products/${id}`}
            className="absolute top-0 left-0 w-full h-full bg-primary/50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all"
          ></Link>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
            <Button variant="secondary" asChild>
              <Link href="">
                <ShoppingCart className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="">
                <Heart className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative pt-3">
          <h3 className="text-xs group-hover:underline group-hover:underline-offset-4">
            <Link href="/" className="block">
              {title}
            </Link>
          </h3>
          <p className="mt-2">
            <span className="sr-only"> Regular Price </span>
            <span className="tracking-wider"> £{price} GBP </span>
          </p>
        </div>
      </div>
    </li>
  );
}
