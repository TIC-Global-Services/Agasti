import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <LocationSection />
      <Footer />
    </main>
  );
}