"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  ShoppingBag,
  Users,
  BarChart3,
  Truck,
  CreditCard,
  MessageSquare,
  Smartphone,
  Gift,
  Mail,
  Store,
  Globe,
} from "lucide-react";

const productItems = [
  { label: "Online Store", icon: Store, desc: "Build your online store" },
  {
    label: "Social Commerce",
    icon: Globe,
    desc: "Sell on social media channels",
  },
  {
    label: "Point-of-Sale",
    icon: ShoppingBag,
    desc: "Sell in person with POS",
  },
  {
    label: "Marketplace Connector",
    icon: Globe,
    desc: "Sync with top marketplaces",
  },
  {
    label: "Checkout & Payment",
    icon: CreditCard,
    desc: "Secure checkout experience",
  },
  {
    label: "Shipping & Fulfillment",
    icon: Truck,
    desc: "Streamline your shipping",
  },
  {
    label: "Inventory Management",
    icon: ShoppingBag,
    desc: "Track and manage stock",
  },
  { label: "Analytics", icon: BarChart3, desc: "Real-time store analytics" },
  {
    label: "Chat Commerce",
    icon: MessageSquare,
    desc: "Sell through messaging",
  },
  { label: "Mobile App", icon: Smartphone, desc: "Launch your mobile store" },
  { label: "Loyalty & Rewards", icon: Gift, desc: "Customer loyalty programs" },
  { label: "Email Marketing", icon: Mail, desc: "Automated email campaigns" },
];

const navItems = [
  { label: "Products", hasDropdown: true },
  { label: "Enterprise", hasDropdown: false },
  { label: "Pricing", hasDropdown: false },
  { label: "Themes", hasDropdown: false },
  { label: "Apps", hasDropdown: false },
  { label: "Resources", hasDropdown: true },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <>
      {/* Top banner */}
      <div className="bg-foreground text-background text-center py-2.5 px-4 text-sm font-medium">
        <span>SHOPLINE Themes 3.0 now available!</span>
        <Link
          href="#"
          className="underline ml-2 text-background hover:opacity-80 transition-opacity"
        >
          Learn more
        </Link>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                S
              </span>
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">
              SHOPLINE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.label === "Products" && setProductOpen(true)
                }
                onMouseLeave={() =>
                  item.label === "Products" && setProductOpen(false)
                }
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-accent"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {item.label === "Products" && productOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[560px]">
                    <div className="bg-background rounded-xl shadow-xl border border-border p-4 grid grid-cols-2 gap-1">
                      {productItems.map((p) => (
                        <Link
                          key={p.label}
                          href="#"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <p.icon className="w-4.5 h-4.5 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">
                              {p.label}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {p.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-4 py-2"
            >
              Log in
            </Link>
            <Link
              href="#"
              className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start free trial
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-background border-t border-border px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href="#"
                className="block text-base font-medium text-foreground/80 hover:text-foreground py-2"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Link
                href="#"
                className="text-center text-sm font-medium text-foreground/80 hover:text-foreground py-2.5 border border-border rounded-lg"
              >
                Log in
              </Link>
              <Link
                href="#"
                className="text-center text-sm font-medium bg-primary text-primary-foreground py-2.5 rounded-lg"
              >
                Start free trial
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
