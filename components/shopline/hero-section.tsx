"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Users,
  RefreshCw,
  Zap,
  Heart,
  ArrowRight,
} from "lucide-react";

const tabs = [
  {
    id: "ecommerce",
    label: "eCommerce",
    icon: ShoppingCart,
    color: "bg-blue-500",
    image: "/images/ecommerce-card.jpg",
    description: "Build, launch and scale your online business with ease",
  },
  {
    id: "social",
    label: "Social Commerce",
    icon: Users,
    color: "bg-pink-500",
    image: "/images/social-commerce.jpg",
    description:
      "Unify your social presence to turn engagement into sales",
  },
  {
    id: "subscription",
    label: "Subscription",
    icon: RefreshCw,
    color: "bg-teal-500",
    image: "/images/subscription-card.jpg",
    description: "All-in-one subscription, built for growth",
  },
  {
    id: "smartpush",
    label: "SmartPush",
    icon: Zap,
    color: "bg-orange-500",
    image: "/images/smartpush-card.jpg",
    description:
      "Fully integrated marketing automation to boost engagement and conversions",
  },
  {
    id: "loyalty",
    label: "Loyalty",
    icon: Heart,
    color: "bg-green-500",
    image: "/images/loyalty-card.jpg",
    description: "Accelerate growth with loyalty that lasts",
  },
];

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("ecommerce");
  const activeData = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--shopline-blue)/0.06),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight text-balance">
            Seamless Commerce.
            <br />
            Accelerated Growth.
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Integrated commerce solutions that empower your business to move
            quickly and scale without limits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-primary/90 transition-colors"
            >
              Start free trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-accent transition-colors"
            >
              Request a demo
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mx-auto max-w-5xl mb-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border">
            <Image
              src="/images/hero-dashboard.jpg"
              alt="SHOPLINE ecommerce dashboard showing product management and sales analytics"
              width={1200}
              height={680}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Product Tabs */}
        <div className="max-w-5xl mx-auto">
          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tabs.map((tab) => (
              <button
                type="button"
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all border ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-background text-foreground/70 border-border hover:bg-accent hover:text-foreground"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 text-balance">
                {activeTab === "ecommerce" && "Build, launch and scale your online business"}
                {activeTab === "social" && "Unlock New Growth Through Social Commerce"}
                {activeTab === "subscription" && "Accelerate growth & recurring revenue"}
                {activeTab === "smartpush" && "Build smart EDM and SMS campaigns with ease"}
                {activeTab === "loyalty" && "Accelerate growth with loyalty that lasts"}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                {activeData.description}. Integrated commerce solutions that
                empower your business to move quickly and scale without limits.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Start free trial
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
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
              <Image
                src={activeData.image || "/placeholder.svg"}
                alt={activeData.label}
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
