const testimonials = [
  { name: "Mohan Sai", text: "Very smooth booking process and excellent driver behavior. Highly recommended for family trips." },
  { name: "Ganesh Challa", text: "Clean car, on-time pickup, and comfortable ride throughout the journey." },
  { name: "Nani", text: "Great service and fair pricing. I will definitely book Divya Darshan Travels again." }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-neutral-900/60 border-y border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-teal-400 font-semibold tracking-wide uppercase text-sm mb-3">Client Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 shadow-lg">
              <p className="text-neutral-300 leading-relaxed mb-5">&quot;{item.text}&quot;</p>
              <p className="text-white font-semibold">{item.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
