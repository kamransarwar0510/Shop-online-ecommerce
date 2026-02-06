"use client";

import Image from "next/image";
import {
  Globe,
  Truck,
  BarChart3,
  ShoppingBag,
  Smartphone,
  Mail,
  Gift,
  MessageSquare,
  CreditCard,
  Package,
  Users,
  Store,
} from "lucide-react";

const platformItems = [
  { label: "Marketplace Connector", icon: Globe },
  { label: "Shipping & Fulfillment", icon: Truck },
  { label: "Analytics", icon: BarChart3 },
  { label: "Point-of-Sale", icon: ShoppingBag },
  { label: "Shopper APP", icon: Smartphone },
  { label: "Email Marketing", icon: Mail },
  { label: "Loyalty & Rewards", icon: Gift },
  { label: "Chat Commerce", icon: MessageSquare },
  { label: "Checkout & Payment", icon: CreditCard },
  { label: "Inventory & Product", icon: Package },
  { label: "Social Commerce", icon: Users },
  { label: "Online Store", icon: Store },
];

export function PlatformSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            The SHOPLINE Commerce Platform
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The complete platform to build, deliver, and optimize intelligent,
            high-impact omnichannel shopping experiences.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center image */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border mb-12">
            <Image
              src="/images/platform-overview.jpg"
              alt="SHOPLINE Commerce Platform overview showing connected modules"
              width={1000}
              height={560}
              className="w-full h-auto"
            />
          </div>

          {/* Platform items grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {platformItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary hover:bg-accent border border-transparent hover:border-border transition-all cursor-pointer group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-foreground text-center leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
