"use client";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { createWhatsAppLink, createCallLink } from "../lib/utils";

type PackageItem = {
  title: string;
  destinations: string[];
  image: string;
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
      { title: "Pancharama Kshetras", image: "/images/packages/pancharama_kshetras.webp", destinations: ["Amaravati", "Bhimavaram", "Palakollu", "Draksharamam", "Samarlakota"] },
      { title: "Royal Spiritual Corridor", image: "/images/packages/royal_spiritual_corridor.webp", destinations: ["Tirumala", "Kanipakam", "Golden Temple", "Arunachalam", "Kanchipuram", "Tiruttani", "Srikalahasti"] },
      { title: "Palli-Valli Pilgrimage", image: "/images/packages/palli_valli_pilgrimage.webp", destinations: ["Vadapalli", "Ainavalli", "Appannapalli", "Annavaram"] },
      { title: "Twin Peaks of Shiva", image: "/images/packages/twin_peaks_shiva.webp", destinations: ["Kotappakonda", "Srisailam"] },
      { title: "Maha Mangala Yatra", image: "/images/packages/maha_mangala_yatra.webp", destinations: ["Kotappakonda", "Srisailam", "Tirupati", "Kanipakam", "Golden Temple", "Arunachalam", "Kanchipuram", "Srikalahasti"] },
      { title: "Vadapalli Special (Weekly / One Day)", image: "/images/packages/vadapalli_special.webp", destinations: ["Vadapalli"] },
      { title: "Pancha Narasimha Kshetras", image: "/images/packages/pancha_narasimha.webp", destinations: ["Mangalagiri", "Mattapalli", "Kethavaram", "Vadapalli", "Vedadri"] },
      { title: "Nava Janardhana Kshetras", image: "/images/packages/nava_janardhana.webp", destinations: ["Dhavaleswaram", "Madiki", "Jonnada", "Alamuru", "Mandapeta", "Kapileswaram", "Korimilli", "Machara", "Kotipalli"] },
      { title: "Sun & Stone Pilgrimage", image: "/images/packages/sun_stone.webp", destinations: ["Dwaraka Tirumala", "Annavaram", "Simhachalam", "Arasavalli", "Srikurmam"] },
      { title: "Tamil Nadu Heritage Tour", image: "/images/packages/tamilnadu_heritage.webp", destinations: ["Madurai", "Rameswaram", "Kanyakumari"] },
      { title: "Temple Towers & Tea Estates", image: "/images/packages/temple_tea.webp", destinations: ["Tirupati", "Ooty", "Isha", "Palani", "Kodaikanal", "Madurai", "Kanyakumari", "Trivandrum", "Thiruchendur", "Rameswaram", "Srirangam"] },
      { title: "Tri Sandhya Yatra (Sabarimala)", image: "/images/packages/tri_sandhya.webp", destinations: ["Srikalahasti", "Tirupati", "Kanchipuram", "Srirangam", "Madurai", "Rameswaram", "Kanyakumari", "Trivandrum", "Erumeli", "Sabarimala", "Guruvayur", "Palani", "Arunachalam", "Golden Temple", "Kanipakam", "Mahanandi", "Srisailam"] },
      { title: "Spiritual North", image: "/images/packages/spiritual_north.webp", destinations: ["Varanasi", "Ayodhya", "Prayagraj"] },
      { title: "Classic South India Temple Tour", image: "/images/packages/classic_south.webp", destinations: ["Kanchipuram", "Mahabalipuram", "Pondicherry", "Chidambaram", "Thanjavur", "Madurai", "Trichy"] },
      { title: "Imperial Odisha", image: "/images/packages/imperial_odisha.webp", destinations: ["Puri", "Konark", "Lingaraj", "Konark Beach", "Mukteswar", "Chilika Lake"] },
    ],
  },
  {
    id: "adventure-coastal-tours",
    title: "Adventure & Coastal Tours",
    emoji: "🌄",
    packages: [
      { title: "Andhra Ooty", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop", destinations: ["Maredumilli", "Lambasingi", "Araku Valley"] },
      { title: "East Coast Explorer", image: "/images/packages/east_coast.webp", destinations: ["Kailasagiri", "Rishikonda", "RK Beach", "Araku", "Borra Caves", "Chaparai"] },
      { title: "Araku Aroma Expedition", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop", destinations: ["Lambasingi", "Kothapalli Waterfalls", "Chaparai", "Vanajangi", "Coffee Plantations", "Borra Caves", "Araku Museum", "Vizag Sightseeing"] },
      { title: "Karnataka Highlands", image: "https://images.unsplash.com/photo-1590737181655-611cc4b3c0f3?q=80&w=1974&auto=format&fit=crop", destinations: ["Mysore", "Coorg", "Wayanad"] },
      { title: "Blue Mountains Tour", image: "https://images.unsplash.com/photo-1580911520626-d62f6b866023?q=80&w=2070&auto=format&fit=crop", destinations: ["Coimbatore", "Ooty", "Kodaikanal"] },
      { title: "Goa Express", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074&auto=format&fit=crop", destinations: ["Hampi", "Goa"] },
      { title: "Kerala Backwaters", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop", destinations: ["Kochi", "Munnar", "Thekkady", "Alleppey"] },
      { title: "Golden Triangle", image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2073&auto=format&fit=crop", destinations: ["Delhi", "Agra", "Jaipur"] },
      { title: "Himalayan Gateway", image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?q=80&w=1934&auto=format&fit=crop", destinations: ["Chandigarh", "Manali", "Rohtang", "Kasol"] },
      { title: "Yoga & Ayurveda Tour", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop", destinations: ["Alleppey", "Varkala", "Kovalam", "Trivandrum"] },
      { title: "Hill Stations Tour", image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=2070&auto=format&fit=crop", destinations: ["Munnar", "Ooty", "Coonoor", "Mysore"] },
      { title: "Coastal Karnataka", image: "https://images.unsplash.com/photo-1610747441999-5290b3951e73?q=80&w=2070&auto=format&fit=crop", destinations: ["Udupi", "Kukke", "Murudeshwar", "Gokarna", "Jog Falls"] },
      { title: "Malnad Tour", image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop", destinations: ["Coorg", "Chikmagalur", "Sringeri", "Udupi"] },
      { title: "Hills & Lakes", image: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?q=80&w=1974&auto=format&fit=crop", destinations: ["Munnar", "Thekkady", "Alappuzha"] },
      { title: "Papikondalu Tour", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop", destinations: ["Papikondalu", "Sirivaka Huts", "Bhadrachalam"] },
    ],
  },
  {
    id: "hidden-packages",
    title: "Hidden Packages",
    emoji: "🌟",
    packages: [
      { title: "Grand Canyon of India", image: "https://images.unsplash.com/photo-1474433130196-2fbc1000bb61?q=80&w=2070&auto=format&fit=crop", destinations: ["Gandikota", "Belum Caves"] },
      { title: "Jewel of South", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop", destinations: ["Yercaud"] },
      { title: "Ghost Town & Beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop", destinations: ["Rameswaram", "Dhanushkodi"] },
    ],
  },
];

function PackageCard({ pkg, categoryTitle }: { pkg: PackageItem; categoryTitle: string }) {
  const prefilledMessage = `Hello Divya Darshan Travels! I am interested in the "${pkg.title}" package (${categoryTitle}). Destinations: ${pkg.destinations.join(", ")}. Please share fare details and availability.`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/90 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_0_30px_rgba(20,184,166,0.12)]">
      <div className="relative h-72 w-full overflow-hidden border-b border-neutral-800 sm:h-48">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
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
