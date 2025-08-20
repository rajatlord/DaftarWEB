export default function Services() {
  const services = [
    "Office‑sharing Cabs",
    "Women‑Friendly Cabs",
    "Home Pickup & Drop",
    "Weekly & Monthly Plans",
    "Outstation & Event Rentals",
    "Employee‑Transport SaaS",
  ];
  return (
    <section className="py-16 bg-green-50">
      <h2 className="text-2xl font-semibold text-center mb-8">Our Services</h2>
      <ul className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((text) => (
          <li
            key={text}
            className="bg-white rounded-lg shadow p-6 text-center font-medium"
          >
            {text}
          </li>
        ))}
      </ul>
    </section>
  );
}
