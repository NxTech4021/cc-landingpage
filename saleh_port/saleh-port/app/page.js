import Image from "next/image";
import Fancybanner from "@/components/banner/fancybanner";
import AboutSection from "@/components/about/aboutMe";
import Prize from "@/components/prizes/Prize"
import Footer from "@/components/footer/footer"
import Contact from "@/components/footer/contact"
export default function Home() {
  return (
    <>
    <Fancybanner />
    <AboutSection />
    <Prize />
    <Contact />
    <Footer />
    </>
  );
}
