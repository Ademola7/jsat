import aboutOffice from "../../assets/aboutOffice.jpg";

export default function AboutHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">Who We Are</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We deliver high-impact solutions that help organizations manage
            complexity, mitigate risks, and drive sustainable growth through
            innovation, technology, and strategic advisory.
          </p>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-xl">
          <img
            src={aboutOffice}
            alt="Boardroom"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
