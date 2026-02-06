import { Shirt, Watch, Dumbbell, ShoppingBag } from "lucide-react";

const industries = [
  { label: "Fashion & Apparel", icon: Shirt },
  { label: "Jewellery & Accessories", icon: Watch },
  { label: "Sports & Outdoors", icon: Dumbbell },
  { label: "General Retail", icon: ShoppingBag },
];

export function IndustriesSection() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-balance">
            Designed for retail businesses
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {industries.map((industry) => (
            <div
              key={industry.label}
              className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-secondary hover:shadow-md border border-transparent hover:border-border transition-all cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <industry.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                {industry.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
