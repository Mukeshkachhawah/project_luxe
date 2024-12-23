import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import HeaderMain from "../Components/HeaderMain/HeaderMain";
import HomeAndKitchen from "../Components/Home-Kitchen-Products/HomeAndKitchen";
import Section from "../Components/Section/Section";

const HomeAndKitchenPage = () => {
  return (
    <>
      <Header />
      <HeaderMain />
      <Section
        pagePath={"Home / Shop / Men Fashion"}
        CardComponent={<HomeAndKitchen />}
      />
      <Footer />
    </>
  );
};

export default HomeAndKitchenPage;
