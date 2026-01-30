import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) {
      alert("Please enter an email address");
      return;
    }

    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto bg-orange-100 rounded-xl p-10 text-center">
        <p className="text-sm tracking-widest mb-3">
          SUBSCRIBE TO OUR NEWSLETTER
        </p>

        <h3 className="text-xl md:text-2xl font-semibold mb-6">
          Get insights on Global Supply Chain Performance and Strategy
        </h3>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="px-4 py-3 rounded-md border border-gray-300 w-full sm:w-72"
          />

          <button
            onClick={handleSubmit}
            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
