import ContactPage from "../components/contacts/ContactPage";
import Layout from "../components/Layout";

function Contacts({ loggedIn, setLoggedIn }) {
  return (
    <Layout contact={true} loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
      <ContactPage />
    </Layout>
  );
}

export default Contacts;
