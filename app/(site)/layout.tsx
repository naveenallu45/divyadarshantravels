import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
