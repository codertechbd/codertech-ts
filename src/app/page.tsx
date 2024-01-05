import Header from "@/components/Header/Header";
import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import ContactUs from "@/components/HomePage/ContactUs/ContactUs";
import Services from "@/components/HomePage/Services/Services";
import TopBanner from "@/components/HomePage/TopBanner/TopBanner";

export default function Home() {
  return (
    <main>
      <Header />
      <TopBanner />
      <Services />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
