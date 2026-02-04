// Contact.jsx
import Navbar from "../components/Navbar";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import Newsletter from "../components/contact/Newsletter";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="space-y-32 pb-32">
        <ContactHero />

        <section className="mx-auto max-w-7xl px-6">
          <div className="grid gap-20 md:grid-cols-3">
            <ContactForm />
            <ContactInfo />
          </div>
        </section>

        <Newsletter />
      </main>
    </>
  );
}
