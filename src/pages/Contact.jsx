import Navbar from "../components/Navbar";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import Newsletter from "../components/contact/Newsletter";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="space-y-24 pb-24">
        <ContactHero />

        <section className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-3">
            <ContactForm />
            <ContactInfo />
          </div>
        </section>

        <Newsletter />
      </main>
    </>
  );
}
