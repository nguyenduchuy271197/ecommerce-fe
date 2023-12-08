export default function SectionHeading({
  heading,
  subheading = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit natus?",
}: {
  heading: string;
  subheading?: string;
}) {
  return (
    <header className="space-y-4 max-w-xl">
      <h2 className="text-2xl font-bold sm:text-3xl">{heading}</h2>
      <p className="text-foreground/70">{subheading}</p>
    </header>
  );
}
