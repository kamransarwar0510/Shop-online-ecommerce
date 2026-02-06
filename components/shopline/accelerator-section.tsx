import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AcceleratorSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
            <Image
              src="/images/brand-accelerator.jpg"
              alt="Scale your brand with SHOPLINE accelerator network"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-5 text-balance">
              Scale your brand smarter and faster -- with the backing you deserve
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Accelerate the next phase of growth with SHOPLINE{"'"}s accelerator
              network built for emerging brands -- get personalized mentorship,
              strategic capital, and enterprise-grade tech to accelerate your
              next phase of growth.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-primary text-base font-semibold hover:underline"
            >
              Learn more
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
