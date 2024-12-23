import HeaderMain from "./../../Components/HeaderMain/HeaderMain";
import Footer from "./../../Components/Footer/Footer";
import Section from "./../../Components/Section/Section";
import BeautyProducts from "../../Components/BeautyProducts/BeautyProducts";

const BeautyPage = () => {
  return (
    <>
      <HeaderMain />
      <Section
        pagePath={"Home / Shop / Beauty Fashion"}
        CardComponent={<BeautyProducts />}
      />
      <Footer />
    </>
  );
};

export default BeautyPage;
