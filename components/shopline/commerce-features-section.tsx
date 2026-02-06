import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Checkout and Payment",
    description:
      "Turn checkout into a conversion engine with secure, flexible, and global payment options.",
    image: "/images/checkout-payment.jpg",
  },
  {
    title: "Inventory",
    description:
      "Automate stock updates, sync channels, and deliver faster with seamless inventory management.",
    image: "/images/inventory.jpg",
  },
  {
    title: "Shipping",
    description:
      "Simplify shipping and scale your business with integrated fulfillment that saves time and cost.",
    image: "/images/shipping.jpg",
  },
  {
    title: "Mobile Shopping App",
    description:
      "Easily build and launch a mobile app that amplifies your brand, elevates the shopping experience, and boosts conversions.",
    image: "/images/mobile-app.jpg",
  },
  {
    title: "Chat Commerce",
    description:
      "Turn conversations into conversions with seamless chat-commerce -- integrating live chat and social messengers on the same platform.",
    image: "/images/chat-commerce.jpg",
  },
  {
    title: "Analytics",
    description:
      "Turn data into growth with real-time store analytics, customizable reports and actionable insights.",
    image: "/images/analytics.jpg",
  },
];

export function CommerceFeaturesSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Fully integrated commerce solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            SHOPLINE provides everything you need to expand your operations and
            to grow your business with a few simple clicks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-secondary rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline"
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
