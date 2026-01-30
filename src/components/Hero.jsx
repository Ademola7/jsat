import AnimatedMap from "./AnimatedMap";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-16 md:grid-cols-2 md:py-24">
        {/* LEFT */}
        <div>
          <h1 className="text-[40px] font-bold leading-[1.15] tracking-tight md:text-[52px]">
            Transforming <br />
            Supply Chains, <br />
            <span className="text-orange-500">Globally.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-6 text-gray-600">
            JSAT integrates logistics, technology, and consulting to eliminate
            inefficiencies and fragmentation helping businesses optimize
            operations and stay competitive in a connected world.
          </p>
          <button className="mt-8 rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow transition hover:bg-orange-600">
            Explore our Solutions
          </button>
        </div>

        {/* RIGHT – MAP */}
        <div className="relative hidden md:block">
          <AnimatedMap />
          {/* <img src={heroMap} alt="" className="w-full max-w-md mx-auto" /> */}
        </div>
      </div>{" "}
    </section>
  );
}
