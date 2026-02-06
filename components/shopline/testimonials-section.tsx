"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "SHOPLINE helped us tackle the operational hurdles of running separate online and POS systems. The integration streamlined our operations, enabling us to focus on delivering seamless customer experiences and staying competitive in retail.",
    avatar: "/images/testimonial-1.jpg",
    name: "Sarah Chen",
    role: "Operations Director",
    company: "LINSY HOME",
  },
  {
    quote:
      "Before SHOPLINE, our platform couldn't keep up with growing demands and became too difficult to manage and maintain. We knew that we needed to move to a platform that was just as robust as our previous system while being easier and less complex to handle.",
    avatar: "/images/testimonial-2.jpg",
    name: "Michael Wong",
    role: "CEO",
    company: "TechStyle Group",
  },
  {
    quote:
      "SHOPLINE powers our store expansion without compromising operational efficiency. It offers a robust, centralized platform that enables us to deliver an omnichannel experience, customize our online presence, and expand stores seamlessly.",
    avatar: "/images/testimonial-3.jpg",
    name: "Lisa Tan",
    role: "Head of Digital",
    company: "FashionForward",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            {"600,000+ merchants choose SHOPLINE"}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl border border-border p-8 lg:p-12 relative">
            <Quote className="w-10 h-10 text-primary/20 absolute top-8 left-8" />

            <div className="flex flex-col items-center text-center pt-6">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-primary/20">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <blockquote className="text-lg lg:text-xl text-foreground/90 leading-relaxed mb-8 max-w-2xl font-medium">
                {`"${testimonial.quote}"`}
              </blockquote>
              <div>
                <div className="font-bold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-accent transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    type="button"
                    key={`dot-${
                      // biome-ignore lint: index key fine here
                      i
                    }`}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === current ? "bg-primary" : "bg-border"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-accent transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
