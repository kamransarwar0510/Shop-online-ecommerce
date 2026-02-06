const brands = [
  "Adidas",
  "Nike",
  "Unilever",
  "Samsung",
  "L'Oreal",
  "Shiseido",
  "Xiaomi",
  "Asus",
  "Anker",
  "Miniso",
  "Muji",
  "Cotton On",
];

export function LogoMarquee() {
  return (
    <section className="py-12 bg-background border-y border-border overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand}-${
                // biome-ignore lint: index key fine here
                i
              }`}
              className="flex-shrink-0 flex items-center justify-center px-10"
            >
              <span className="text-lg font-semibold text-muted-foreground/50 whitespace-nowrap tracking-wide">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
