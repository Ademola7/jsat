export default function ContactForm() {
  return (
    <form className="md:col-span-2 space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <input type="text" placeholder="First name" className="input" />
        <input type="text" placeholder="Last name" className="input" />
      </div>

      <input type="email" placeholder="Email address" className="input" />

      <input type="tel" placeholder="Phone number" className="input" />

      <textarea
        rows="5"
        placeholder="Leave us a message..."
        className="input resize-none"
      />

      <button
        type="submit"
        className="rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white hover:bg-orange-600 transition"
      >
        Send Message
      </button>
    </form>
  );
}
