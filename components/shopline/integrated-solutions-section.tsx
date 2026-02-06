import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "SHOPLINE Subscription",
    description:
      "Grow recurring revenue with an all-in-one subscription solution that converts one time buyers into loyal subscribers.",
    image: "/images/subscription-card.jpg",
    reversed: false,
  },
  {
    title: "Member System",
    description:
      "Boost repeat purchases and brand love with SHOPLINE's native loyalty engine -- turning customers into advocates through tiered rewards, referrals, and seamless omnichannel experiences.",
    image: "/images/loyalty-card.jpg",
    reversed: true,
  },
  {
    title: "SmartPush",
    description:
      "Automate your marketing with SHOPLINE's native marketing automation system -- unified email, SMS, and pop-ups driven by AI-powered personalization, real-time data, and smart workflows to boost engagement and sales.",
    image: "/images/smartpush-card.jpg",
    reversed: false,
  },
];

export function IntegratedSolutionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Unified solutions for accelerating conversions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Natively integrated SHOPLINE apps and products that elevate customer
            experiences and accelerate growth across every touchpoint.
          </p>
        </div>

        <div className="space-y-20">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                solution.reversed ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={solution.reversed ? "lg:order-2" : ""}>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 text-balance">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {solution.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Start free trial
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div
                className={`rounded-2xl overflow-hidden shadow-xl border border-border ${
                  solution.reversed ? "lg:order-1" : ""
                }`}
              >
                <Image
                  src={solution.image || "/placeholder.svg"}
                  alt={solution.title}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
