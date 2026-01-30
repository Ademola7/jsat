export default function CallToAction() {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="flex flex-col items-center gap-6 rounded-2xl bg-gray-50 p-10 md:flex-row md:justify-between">
        <div>
          <h4 className="text-xl font-semibold text-gray-900">
            Ready to Build a More Resilient Supply Chain?
          </h4>
        </div>

        <button className="rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white hover:bg-orange-600 transition">
          Let’s Work Together
        </button>
      </div>
    </section>
  );
}
