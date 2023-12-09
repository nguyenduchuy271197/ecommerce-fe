import { Skeleton } from "@/components/ui/skeleton";
import { generateArray } from "@/lib/utils";

export default function ProductSkeleton() {
  return (
    <div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
      {generateArray(8).map((n) => (
        <div className="space-y-2" key={n}>
          <Skeleton className="h-[350px] sm:h-[450px]" />
          <Skeleton className="h-12" />
        </div>
      ))}
    </div>
  );
}
