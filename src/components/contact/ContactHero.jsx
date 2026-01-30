export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-3xl font-semibold text-gray-900">Contact Us</h1>
        <p className="mt-2 text-gray-600">
          Let’s discuss how we may help your business
        </p>
      </div>

      {/* Decorative wave */}
      <img
        src="https://via.placeholder.com/800x200"
        alt=""
        className="absolute right-0 top-0 h-full opacity-20"
      />
    </section>
  );
}
