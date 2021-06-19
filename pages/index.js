import Banner from "../components/index/banner/Banner";
import Discount from "../components/index/discounts/Discount";
import Welcome from "../components/index/welcome/Welcome";
import AboutUsCreation from "../components/aboutUs/creation/AboutUsCreation";
import OurTeam from "../components/aboutUs/ourTeam/OurTeam";
import Layout from "../components/Layout";
import ServiAbout from "../components/servi/ServiAbout";
import nookies from "nookies";
import { useEffect } from "react";

function Home({ services, loggedIn, setLoggedIn }) {
  useEffect(() => {
    console.log(loggedIn);
  }, [loggedIn]);
  return (
    <>
      <Layout setLoggedIn={setLoggedIn} loggedIn={loggedIn}>
        <Banner />
        <Banner />
        <Welcome />
        <Discount />
        <AboutUsCreation />
        <OurTeam />
        <ServiAbout services={services} />
      </Layout>
    </>
  );
}

export default Home;

export async function getServerSideProps() {
  // const cookies = nookies.get(ctx);
  // const token = cookies.JWT;
  // console.log(cookies);
  const resp = await fetch(
    `https://wdev2.be/khachatur21/eindwerk/api/services.json`,
    {
      method: "GET",
      // headers: { Authorization: `Bearer ${token}` },
    }
  );
  const services = await resp.json();

  return {
    props: { services },
  };
}
