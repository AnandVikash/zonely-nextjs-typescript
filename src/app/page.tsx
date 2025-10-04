import AboutSection from "@/components/pages/homepage/AboutSection";
import BannerSection from "@/components/pages/homepage/BannerSection";
import ContactSection from "@/components/pages/homepage/ContactSection";
import FeedbackSection from "@/components/pages/homepage/FeedbackSection";
import WhatsInsideSection from "@/components/pages/homepage/WhatsInsideSection";
import WhoAreBuddies from "@/components/pages/homepage/WhoAreBuddies";
import WhyChooseUs from "@/components/pages/homepage/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <WhatsInsideSection />
      <WhyChooseUs />
      <WhoAreBuddies />
      <FeedbackSection />
      <ContactSection />
    </>
  );
}
