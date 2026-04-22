import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { createWhatsAppLink, createCallLink } from "../lib/utils";

type PackageItem = {
  title: string;
  destinations: string[];
};

type PackageCategory = {
  id: string;
  title: string;
  emoji: string;
  packages: PackageItem[];
};

const packageCategories: PackageCategory[] = [
  {
    id: "spiritual-tours",
    title: "Spiritual Tours",
    emoji: "🛕",
    packages: [
      { title: "Pancharama Kshetras", destinations: ["Amaravati", "Bhimavaram", "Palakollu", "Draksharamam", "Samarlakota"] },
      { title: "Royal Spiritual Corridor", destinations: ["Tirumala", "Kanipakam", "Golden Temple", "Arunachalam", "Kanchipuram", "Tiruttani", "Srikalahasti"] },
      { title: "Palli-Valli Pilgrimage", destinations: ["Vadapalli", "Ainavalli", "Appannapalli", "Annavaram"] },
      { title: "Twin Peaks of Shiva", destinations: ["Kotappakonda", "Srisailam"] },
      { title: "Maha Mangala Yatra", destinations: ["Kotappakonda", "Srisailam", "Tirupati", "Kanipakam", "Golden Temple", "Arunachalam", "Kanchipuram", "Srikalahasti"] },
      { title: "Vadapalli Special (Weekly / One Day)", destinations: ["Vadapalli"] },
      { title: "Pancha Narasimha Kshetras", destinations: ["Mangalagiri", "Mattapalli", "Kethavaram", "Vadapalli", "Vedadri"] },
      { title: "Nava Janardhana Kshetras", destinations: ["Dhavaleswaram", "Madiki", "Jonnada", "Alamuru", "Mandapeta", "Kapileswaram", "Korimilli", "Machara", "Kotipalli"] },
      { title: "Sun & Stone Pilgrimage", destinations: ["Dwaraka Tirumala", "Annavaram", "Simhachalam", "Arasavalli", "Srikurmam"] },
      { title: "Tamil Nadu Heritage Tour", destinations: ["Madurai", "Rameswaram", "Kanyakumari"] },
      { title: "Temple Towers & Tea Estates", destinations: ["Tirupati", "Ooty", "Isha", "Palani", "Kodaikanal", "Madurai", "Kanyakumari", "Trivandrum", "Thiruchendur", "Rameswaram", "Srirangam"] },
      { title: "Tri Sandhya Yatra (Sabarimala)", destinations: ["Srikalahasti", "Tirupati", "Kanchipuram", "Srirangam", "Madurai", "Rameswaram", "Kanyakumari", "Trivandrum", "Erumeli", "Sabarimala", "Guruvayur", "Palani", "Arunachalam", "Golden Temple", "Kanipakam", "Mahanandi", "Srisailam"] },
      { title: "Spiritual North", destinations: ["Varanasi", "Ayodhya", "Prayagraj"] },
      { title: "Classic South India Temple Tour", destinations: ["Kanchipuram", "Mahabalipuram", "Pondicherry", "Chidambaram", "Thanjavur", "Madurai", "Trichy"] },
      { title: "Imperial Odisha", destinations: ["Puri", "Konark", "Lingaraj", "Konark Beach", "Mukteswar", "Chilika Lake"] },
    ],
  },
  {
    id: "adventure-coastal-tours",
    title: "Adventure & Coastal Tours",
    emoji: "🌄",
    packages: [
      { title: "Andhra Ooty", destinations: ["Maredumilli", "Lambasingi", "Araku Valley"] },
      { title: "East Coast Explorer", destinations: ["Kailasagiri", "Rishikonda", "RK Beach", "Araku", "Borra Caves", "Chaparai"] },
      { title: "Araku Aroma Expedition", destinations: ["Lambasingi", "Kothapalli Waterfalls", "Chaparai", "Vanajangi", "Coffee Plantations", "Borra Caves", "Araku Museum", "Vizag Sightseeing"] },
      { title: "Karnataka Highlands", destinations: ["Mysore", "Coorg", "Wayanad"] },
      { title: "Blue Mountains Tour", destinations: ["Coimbatore", "Ooty", "Kodaikanal"] },
      { title: "Goa Express", destinations: ["Hampi", "Goa"] },
      { title: "Kerala Backwaters", destinations: ["Kochi", "Munnar", "Thekkady", "Alleppey"] },
      { title: "Golden Triangle", destinations: ["Delhi", "Agra", "Jaipur"] },
      { title: "Himalayan Gateway", destinations: ["Chandigarh", "Manali", "Rohtang", "Kasol"] },
      { title: "Yoga & Ayurveda Tour", destinations: ["Alleppey", "Varkala", "Kovalam", "Trivandrum"] },
      { title: "Hill Stations Tour", destinations: ["Munnar", "Ooty", "Coonoor", "Mysore"] },
      { title: "Coastal Karnataka", destinations: ["Udupi", "Kukke", "Murudeshwar", "Gokarna", "Jog Falls"] },
      { title: "Malnad Tour", destinations: ["Coorg", "Chikmagalur", "Sringeri", "Udupi"] },
      { title: "Hills & Lakes", destinations: ["Munnar", "Thekkady", "Alappuzha"] },
      { title: "Papikondalu Tour", destinations: ["Papikondalu", "Sirivaka Huts", "Bhadrachalam"] },
    ],
  },
  {
    id: "hidden-packages",
    title: "Hidden Packages",
    emoji: "🌟",
    packages: [
      { title: "Grand Canyon of India", destinations: ["Gandikota", "Belum Caves"] },
      { title: "Jewel of South", destinations: ["Yercaud"] },
      { title: "Ghost Town & Beach", destinations: ["Rameswaram", "Dhanushkodi"] },
    ],
  },
];

function PackageCard({ pkg, categoryTitle }: { pkg: PackageItem; categoryTitle: string }) {
  const prefilledMessage = `Hello Divya Darshan Travels! I am interested in the "${pkg.title}" package (${categoryTitle}). Destinations: ${pkg.destinations.join(", ")}. Please share fare details and availability.`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/90 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_0_30px_rgba(20,184,166,0.12)]">
      <div className="h-40 w-full border-b border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800 px-4 py-3">
        <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-neutral-700 bg-neutral-900/70 text-center text-xs font-semibold uppercase tracking-wide text-neutral-500">
          {pkg.title} Image Placeholder
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h4 className="mb-3 text-lg font-bold leading-tight text-white">{pkg.title}</h4>

        <ul className="mb-5 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-neutral-300">
          {pkg.destinations.map((destination) => (
            <li key={`${pkg.title}-${destination}`} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
              <span>{destination}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto grid grid-cols-2 gap-2 border-t border-neutral-800 pt-4">
          <a
            href={createWhatsAppLink(prefilledMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Book ${pkg.title} on WhatsApp`}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-green-500 px-2 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-green-600"
          >
            <FaWhatsapp size={14} /> WhatsApp
          </a>
          <a
            href={createCallLink()}
            aria-label={`Call now for ${pkg.title}`}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-neutral-700 bg-neutral-800 px-2 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-neutral-700"
          >
            <FaPhoneAlt size={12} /> Call Now
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Packages() {
  return (
    <section id="packages" className="border-t border-neutral-800 bg-neutral-900 py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <header className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            <span className="text-teal-400">Travel Packages</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-neutral-400 sm:text-lg">
            Explore spiritual, adventure, coastal, and hidden destination packages with comfortable vehicles, professional drivers, and easy booking.
          </p>
        </header>

        <div className="space-y-14">
          {packageCategories.map((category) => (
            <section key={category.id} aria-labelledby={category.id}>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">{category.emoji}</span>
                <h3 id={category.id} className="text-2xl font-bold text-white md:text-3xl">
                  {category.title}
                </h3>
                <span className="rounded-full border border-neutral-700 bg-neutral-800 px-2.5 py-1 text-xs font-semibold text-teal-300">
                  {category.packages.length} Packages
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.packages.map((pkg) => (
                  <PackageCard key={`${category.id}-${pkg.title}`} pkg={pkg} categoryTitle={category.title} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
