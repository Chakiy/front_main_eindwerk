import Layout from "../components/Layout";
import AboutUsCreation from "../components/aboutUs/creation/AboutUsCreation";
import OurTeam from "../components/aboutUs/ourTeam/OurTeam";
import Award from "../components/aboutUs/award/Award";
function About({ loggedIn, setLoggedIn }) {
  return (
    <Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
      <AboutUsCreation />
      <Award />
      <OurTeam />
    </Layout>
  );
}

export default About;
