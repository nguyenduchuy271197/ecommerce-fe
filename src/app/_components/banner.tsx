import Image from "next/image";

interface BannerProps {
  heading: string;
  src: string;
}

export default function Banner({ heading, src }: BannerProps) {
  return (
    <section>
      <div className="container">
        <div className="relative aspect-[2/1] w-full rounded-2xl overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <h1 className="text-4xl font-bold lg:text-6xl text-primary-foreground">
              {heading}
            </h1>
          </div>
          <Image
            src={src}
            alt={heading}
            fill
            priority
            className="object-cover brightness-50"
          />
        </div>
      </div>
    </section>
  );
}
