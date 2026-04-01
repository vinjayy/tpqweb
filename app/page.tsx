import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Facilities from "@/components/Facilities";
import WhyUs from "@/components/WhyUs";
import Greetings from "@/components/Greetings";
import Programs from "@/components/Programs";
import StatsRow from "@/components/StatsRow";
import GalleryRow from "@/components/GalleryRow";
import EnrollCta from "@/components/EnrollCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-dark font-sans selection:bg-brand-primary selection:text-white">
      <Navbar />
      <Hero />
      <Facilities />
      <WhyUs />
      <Greetings />
      <Programs />
      <StatsRow />
      <GalleryRow />
      <EnrollCta />
      <Footer />
    </main>
  );
}
