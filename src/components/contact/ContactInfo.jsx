const Item = ({ title, text, link }) => (
  <div className="space-y-1">
    <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
    {link ? (
      <a href="#" className="text-sm text-gray-600 hover:text-orange-500">
        {text}
      </a>
    ) : (
      <p className="text-sm text-gray-600">{text}</p>
    )}
  </div>
);

export default function ContactInfo() {
  return (
    <aside className="space-y-8">
      <Item title="Chat with us" text="Speak to our friendly team via chat." />
      <Item title="Start a live chat" text="Open chat" link />
      <Item
        title="Send us an email"
        text="hello@jsatsolutions.com
"
        link
      />

      <Item title="Call us" text="Call our team Mon–Fri from 8am to 5pm" />
      <Item title="Phone" text="+234 000 000 0000" />
    </aside>
  );
}
