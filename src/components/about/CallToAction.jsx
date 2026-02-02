import aboutPeople from "../../assets/aboutPeople.png";

export default function CallToAction() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl overflow-hidden shadow-2xl">
        <div className="md:flex">
          {/* Left: visible background image (full-width on mobile, half on md+) */}
          <div
            className="hidden md:block md:w-1/2 bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${aboutPeople})`, minHeight: 240 }}
            aria-hidden="true"
          />

          {/* Right: content stacked, top-aligned and right-justified */}
          <div className="w-full md:w-1/2 bg-gray-50 px-6 py-6 md:p-10 flex items-start">
            <div className="ml-auto flex flex-col items-end space-y-2 md:space-y-4 max-w-md">
              <h4 className="text-xl font-semibold text-gray-900">
                Ready to Build a More Resilient Supply Chain?
              </h4>

              <button className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-600 transition">
                Let’s Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
