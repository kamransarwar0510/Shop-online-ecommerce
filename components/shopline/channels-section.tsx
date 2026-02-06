"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const channels = [
  {
    id: "social",
    label: "Social",
    title: "Go live, go viral, grow sales",
    description:
      "Connect & convert your audience everywhere -- with SHOPLINE Social Commerce, you can unify your social channels, livestreams, and social marketplaces into one seamless experience that turns followers into customers.",
    image: "/images/social-live.jpg",
  },
  {
    id: "pos",
    label: "POS",
    title: "Unify online with offline retail with SHOPLINE POS",
    description:
      "Enable true online-merge-offline retail with SHOPLINE's POS system -- integrating your physical and digital stores to streamline inventory, unify promotions, and deliver seamless shopping experiences across every channel.",
    image: "/images/pos-system.jpg",
  },
  {
    id: "marketplaces",
    label: "Marketplaces",
    title: "Expand your reach with seamless marketplace integration",
    description:
      "SHOPLINE's Multichannel Connect unifies your products, orders, and inventory across top marketplaces like Amazon, Shopee, and Lazada -- so you can scale globally with simplicity and confidence.",
    image: "/images/marketplace-connect.jpg",
  },
];

export function ChannelsSection() {
  const [activeChannel, setActiveChannel] = useState("social");
  const active = channels.find((c) => c.id === activeChannel)!;

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Unified shopping experiences -- seamlessly connected across all
            channels
          </h2>
        </div>

        {/* Channel tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {channels.map((channel) => (
            <button
              type="button"
              key={channel.id}
              onClick={() => setActiveChannel(channel.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeChannel === channel.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-foreground/70 hover:bg-accent"
              }`}
            >
              {channel.label}
            </button>
          ))}
        </div>

        {/* Channel content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-5 text-balance">
              {active.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {active.description}
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
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
            <Image
              src={active.image || "/placeholder.svg"}
              alt={active.title}
              width={600}
              height={420}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
