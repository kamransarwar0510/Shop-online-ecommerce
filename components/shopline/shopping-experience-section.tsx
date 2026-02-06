"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Paintbrush, Layout, AppWindow } from "lucide-react";

const experienceTabs = [
  {
    id: "builder",
    label: "Website builder",
    icon: Paintbrush,
    title: "Website builder",
    description:
      "No coding expertise required. An easy-to-use website builder to create your store in just minutes.",
    cta: "Build your brand",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "themes",
    label: "Customizable themes",
    icon: Layout,
    title: "Customizable themes",
    description:
      "Launch faster, design freely, and create a store that reflects your brand perfectly.",
    cta: "Browse themes",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "apps",
    label: "APP store",
    icon: AppWindow,
    title: "APP store",
    description:
      "Manage customers, streamline operations, increase sales, and more with integrated native apps.",
    cta: "Visit app store",
    videoId: "dQw4w9WgXcQ",
  },
];

export function ShoppingExperienceSection() {
  const [activeTab, setActiveTab] = useState("builder");
  const active = experienceTabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Deliver elevated shopping experiences that amplify your brand
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Create a store that captivates -- turning every interaction into a
            personalized experience that forges lasting customer relationships
            and accelerates conversions.
          </p>
          <div className="mt-6">
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Start free trial
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {experienceTabs.map((tab) => (
              <button
                type="button"
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all border ${
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

          {/* Content */}
          <div className="rounded-2xl overflow-hidden bg-background border border-border shadow-lg">
            <div className="aspect-video bg-foreground/5 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <active.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {active.title}
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-4 leading-relaxed">
                  {active.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
                >
                  {active.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
