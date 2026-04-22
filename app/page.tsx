import { Hero } from "@/components/home/Hero";
import { ProblemaSection } from "@/components/home/ProblemaSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { StatsSection } from "@/components/home/StatsSection";
import { CTASection } from "@/components/home/CTASection";
import { DemoChatWidget } from "@/components/demo/DemoChat";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemaSection />
      <ServicesSection />
      <StatsSection />
      <ProcessSection />
      <CTASection />
      <DemoChatWidget />
    </main>
  );
}
