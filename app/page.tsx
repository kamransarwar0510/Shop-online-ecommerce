import { Header } from "@/components/shopline/header";
import { HeroSection } from "@/components/shopline/hero-section";
import { FeaturesSection } from "@/components/shopline/features-section";
import { PlatformSection } from "@/components/shopline/platform-section";
import { ShoppingExperienceSection } from "@/components/shopline/shopping-experience-section";
import { ChannelsSection } from "@/components/shopline/channels-section";
import { IntegratedSolutionsSection } from "@/components/shopline/integrated-solutions-section";
import { CommerceFeaturesSection } from "@/components/shopline/commerce-features-section";
import { TestimonialsSection } from "@/components/shopline/testimonials-section";
import { LogoMarquee } from "@/components/shopline/logo-marquee";
import { IndustriesSection } from "@/components/shopline/industries-section";
import { AcceleratorSection } from "@/components/shopline/accelerator-section";
import { ResourcesSection } from "@/components/shopline/resources-section";
import { CTASection } from "@/components/shopline/cta-section";
import { Footer } from "@/components/shopline/footer";

export default function Page() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PlatformSection />
      <ShoppingExperienceSection />
      <ChannelsSection />
      <IntegratedSolutionsSection />
      <CommerceFeaturesSection />
      <TestimonialsSection />
      <LogoMarquee />
      <IndustriesSection />
      <AcceleratorSection />
      <ResourcesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
