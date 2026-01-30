export default function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="rounded-2xl bg-orange-100 p-10 text-center">
        <p className="text-xs font-semibold tracking-widest text-orange-600">
          SUBSCRIBE TO OUR NEWSLETTER
        </p>

        <h4 className="mt-3 text-xl font-semibold text-gray-900">
          Get insights on Global Supply Chain Performance and Strategy
        </h4>

        <form className="mx-auto mt-6 flex max-w-md overflow-hidden rounded-full bg-white shadow-sm">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-3 text-sm outline-none"
          />
          <button className="bg-orange-500 px-6 text-sm font-medium text-white hover:bg-orange-600">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
