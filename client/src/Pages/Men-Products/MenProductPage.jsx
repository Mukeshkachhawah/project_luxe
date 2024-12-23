import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import HeaderMain from "../../Components/HeaderMain/HeaderMain";
import MenProducts from "../../Components/MenProducts/MenProducts";
import Section from "../../Components/Section/Section";

const MenProductPage = () => {
  return (
    <>
      <Header />
      <HeaderMain />
      <Section
        pagePath={"Home / Shop / Men Fashion"}
        CardComponent={<MenProducts />}
      />
      <Footer />
    </>
  );
};

export default MenProductPage;
