// ContactInfo.jsx
const Item = ({ title, text, link }) => (
  <div className="space-y-1">
    <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
    {link ? (
      <a
        href={link}
        className="text-sm text-gray-600 hover:text-orange-500 transition"
      >
        {text}
      </a>
    ) : (
      <p className="text-sm text-gray-600">{text}</p>
    )}
  </div>
);

export default function ContactInfo() {
  return (
    <aside className="space-y-10">
      <Item
        title="Email us"
        text="hello@jsatsolutions.com"
        link="mailto:hello@jsatsolutions.com"
      />

      <Item
        title="Call us"
        text="+234 817 212 1622"
        link="tel:+2348172121622"
      />

      <Item title="Office hours" text="Monday – Friday, 8am – 5pm" />
    </aside>
  );
}
