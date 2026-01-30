import globe from "../assets/globe.jpg";
export default function SupplyChainCTA() {
  const handleClick = () => {
    alert("Supply Chain Assessment Requested!");
  };

  return (
    <section className="px-6 py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Strengthen Your Supply Chain?
          </h2>

          <p className="text-gray-600 mb-6">
            Whether you are navigating complex markets or improving visibility
            and efficiency, we are ready to partner with you.
          </p>

          <button
            onClick={handleClick}
            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
          >
            Request a Supply Chain Assessment
          </button>
        </div>

        <div />
        <img src={globe} alt="" />
      </div>
    </section>
  );
}
