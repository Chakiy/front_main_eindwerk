import Layout from "../components/Layout";
import ServiAbout from "../components/servi/ServiAbout";
import nookies from "nookies";

function Procedures({ services, loggedIn, setLoggedIn }) {
  return (
    <>
      <Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
        {/* {console.log(services)} */}
        <ServiAbout services={services} />
        {/* <pre>{JSON.stringify(token, null, 2)}</pre> */}
      </Layout>
    </>
  );
}

export default Procedures;
export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);
  const token = cookies.JWT;
  console.log(cookies);
  const resp = await fetch(
    `https://wdev2.be/khachatur21/eindwerk/api/services.json`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const services = await resp.json();

  return {
    props: { services },
  };
}

// ${process.env.MY_API}
