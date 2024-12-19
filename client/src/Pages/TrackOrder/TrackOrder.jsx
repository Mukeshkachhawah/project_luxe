import React from "react";
import Header from "../../Components/Header/Header";
import HeaderMain from "../../Components/HeaderMain/HeaderMain";
import Footer from "../../Components/Footer/Footer";
import OrderTracking from "../../Components/OrderTracking/OrderTracking";
import Section from "../../Components/Section/Section";

const TrackOrder = () => {
  return (
    <>
      <Header />
      <HeaderMain />

      <OrderTracking />
      <Footer />
    </>
  );
};

export default TrackOrder;
