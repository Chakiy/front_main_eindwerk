import Banner from "../components/index/banner/Banner";
import Discount from "../components/index/discounts/Discount";
import Welcome from "../components/index/welcome/Welcome";
import AboutUsCreation from "../components/aboutUs/creation/AboutUsCreation";
import OurTeam from "../components/aboutUs/ourTeam/OurTeam";
import Layout from "../components/Layout";
import ServiAbout from "../components/servi/ServiAbout";
import nookies from "nookies";
import { useEffect } from "react";
import { NextSeo } from "next-seo";

function Home({ services, loggedIn, setLoggedIn }) {
  const SEO = {
    title: "Beauty Salon Lakshmi",
    description: "Find all about how to bring your look to next level",
    openGraph: {
      url: "https://front-main-eindwerk.vercel.app/",
      title: "Beauty Salon Lakshmi",
      images: [
        {
          url: "https://static.wixstatic.com/media/c90e66_7f23c531f1834e869a1468d3bcdcc291~mv2.jpeg",
          width: 500,
          height: 400,
          alt: "Logo of Beauty Salon Lakshmi",
        },
      ],
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <Layout setLoggedIn={setLoggedIn} loggedIn={loggedIn}>
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
