import { Layers, Brain, Puzzle } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Build with precision, launch at speed",
    description:
      "Seamlessly integrated apps, products, and solutions that empower you to build, launch, and scale effortlessly.",
  },
  {
    icon: Brain,
    title: "Unified, Intelligence-driven channels",
    description:
      "Turn interactions into conversions with customer intelligence powered engagements across your website, social, POS, loyalty and more.",
  },
  {
    icon: Puzzle,
    title: "Unlock your vision with limitless extensibility",
    description:
      "A flexible platform built to scale, integrate, and evolve with your business at every stage.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground text-balance">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
