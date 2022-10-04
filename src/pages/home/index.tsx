import CardsSection from "../../components/cards-section";
import CreamSection from "../../components/cream-section";
import Details from "../../components/Details";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Section from "../../components/section";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Header />
      <Section />
      <CardsSection />
      <CreamSection />
      <Details />
      <Footer />
    </>
  );
};

export default Home;
