import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen font-inter">
      <Hero />
      <About />
      <Solutions />
      <ContactForm />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
