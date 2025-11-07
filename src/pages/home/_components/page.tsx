import Hero from "./hero";
import Portfolio from "./portfolio";
import Service from "./sevice";
import ClientsFeedback from "./clients_feedback";
import FAQ from "./faq";
import Achievements from "./achievements";
import CTA from "./cta";
import Footer from "@/layouts/footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Portfolio />
      <ClientsFeedback />
      <FAQ />
      <Achievements />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
