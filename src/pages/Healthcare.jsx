import HeroSection from "./../components/sections/hero-section";
import FeaturesSection from "./../components/sections/features-section";
import PlatformSection from "./../components/sections/platform-section";
import TestimonialsSection from "./../components/sections/testimonials-section";
import CtaSection from "./../components/sections/cta-section";
import ContactSection from "./../components/sections/contact-section";

const Footer = () => (
  <footer className="footer bg-black text-white text-center py-3">
    <div>
      <p className="text-center">© 2025 Surgical Intelligence, All Rights Reserved.</p>
    </div>
  </footer>
);

const Healthcare = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PlatformSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Healthcare;

