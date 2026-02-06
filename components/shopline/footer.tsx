import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  Platform: [
    "Get Started",
    "Themes",
    "Migrate",
    "Apps",
    "Change Log",
  ],
  Resources: [
    "Blog",
    "News",
    "Academy",
    "Help Center",
    "Developer Center",
    "Be a Partner",
  ],
  Enterprise: ["Overview", "Features", "Contact Us"],
  SHOPLINE: [
    "About Us",
    "Partners",
    "Rules Center",
    "Feedback & Complaint",
    "Service Status",
  ],
};

const bottomLinks = ["Privacy", "Compliance", "Terms", "Sitemap"];

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-bold text-background uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">
                S
              </span>
            </div>
            <span className="text-sm font-bold text-background">SHOPLINE</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {bottomLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-xs text-background/50 hover:text-background/80 transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-background/50 hover:text-background transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="text-background/50 hover:text-background transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-background/40">
            {"Copyright 2013-25 SHOPLINE. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
