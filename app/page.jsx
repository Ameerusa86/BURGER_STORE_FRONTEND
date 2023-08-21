import {
  AboutSection,
  Categories,
  ContactUsSection,
  Footer,
  HomeSection,
  Promo,
  ReviewsSection,
} from "@/Sections";

export default function Home() {
  return (
    <>
      <HomeSection />
      <Categories />
      <Promo />
      <AboutSection />
      <ReviewsSection />
      <ContactUsSection />
      <Footer />
    </>
  );
}
