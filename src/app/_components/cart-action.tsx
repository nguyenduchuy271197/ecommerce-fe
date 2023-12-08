import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function CartAction() {
  return (
    <Button asChild>
      <Link href="/cart" className="flex items-center gap-2">
        <ShoppingCart className="w-5 h-5" />
        <span>0</span>
      </Link>
    </Button>
  );
}
