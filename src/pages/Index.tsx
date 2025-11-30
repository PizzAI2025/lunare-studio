import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Plans } from "@/components/Plans";
import { Gallery } from "@/components/Gallery";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Plans />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
