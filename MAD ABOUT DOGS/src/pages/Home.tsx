import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import PetTypes from "../components/home/PetTypes";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <PetTypes />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;