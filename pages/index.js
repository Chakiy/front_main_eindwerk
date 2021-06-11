import Nav from "../components/nav/Nav";
import HeadData from "../components/HeadData";
import Banner from "../components/index/banner/Banner";
import Discount from "../components/index/discounts/Discount";
import Welcome from "../components/index/welcome/Welcome";
import AboutUs from "../components/aboutUs/AboutUs";
import Footer from "../components/footer/Footer";
// import { useEffect } from "react";

export default function Home() {
  // useEffect(async () => {
  //   const resp = await fetch(
  //     `https://wdev2.be/khachatur21/eindwerk/api/services.json`
  //   );
  //   const data = await resp.json();
  //   console.log(data);
  // }, []);

  return (
    <>
      <HeadData />
      <Nav />
      <Banner />
      <Welcome />
      <Discount />
      <AboutUs />
      <Footer />
    </>
  );
}
