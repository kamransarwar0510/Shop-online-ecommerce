import Link from "next/link";
import {
  ArrowRight,
  HelpCircle,
  GraduationCap,
  Code2,
  Headphones,
} from "lucide-react";

const resources = [
  {
    icon: HelpCircle,
    title: "Help Center",
    description:
      "Got questions? Find step-by-step guides, user manuals, and resources to help you build, configure, and launch your SHOPLINE store with ease.",
    cta: "Get answers",
  },
  {
    icon: GraduationCap,
    title: "Academy",
    description:
      "Level up your eCommerce skills for free with expert-led courses, tutorials, and resources to help you build and scale confidently.",
    cta: "Explore more",
  },
  {
    icon: Code2,
    title: "Dev Portal",
    description:
      "Leverage SHOPLINE's architecture and documentation to create scalable, customized shopping experiences -- from themes to transactions to storefronts.",
    cta: "Visit Dev Portal",
  },
  {
    icon: Headphones,
    title: "Support",
    description:
      "Get 24/7 support from SHOPLINE experts -- ensuring your store stays online, optimized, and running smoothly at all times.",
    cta: "Talk to us",
  },
];

export function ResourcesSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Everything you need to succeed with SHOPLINE
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Access guides, tutorials, developer tools, and expert support -- all
            in one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="bg-secondary rounded-2xl p-6 border border-transparent hover:border-border hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <resource.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {resource.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {resource.description}
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline"
              >
                {resource.cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
