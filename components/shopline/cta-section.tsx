import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-foreground relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--shopline-blue)/0.15),transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-background mb-6 text-balance">
          {"Over 600,000 brands worldwide are using SHOPLINE"}
        </h2>
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
            className="inline-flex items-center gap-2 border border-background/20 text-background px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-background/10 transition-colors"
          >
            Request a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
