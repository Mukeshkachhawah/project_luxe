import HeaderMain from "../../Components/HeaderMain/HeaderMain";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/BannerMenCollection/Banner";
import FeatureBox from "../../Components/FeaturesRow/FeatureRow";
import FeatureProducts from "../../Components/FeatureProducts/FeatureProducts";
import Discount from "../../Components/Discount/Discount";
import InspiredProduct from "./../../Components/InspiredProduct/InspiredProduct";
import LatestBlog from "../../Components/LatestBlog/LatestBlog";

const Home = () => {
  return (
    <>
      <HeaderMain />
      <Banner />
      <FeatureBox />
      <FeatureProducts />
      <Discount />
      <InspiredProduct />
      <LatestBlog />
      <Footer />
    </>
  );
};

export default Home;
