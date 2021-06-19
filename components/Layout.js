import Nav from ".//nav/Nav";
import HeadData from "./HeadData";
import Footer from "./footer/Footer";
import FooterCopyright from "./footer/footerCopyright";

function Layout({ children, contact = false, setLoggedIn, loggedIn }) {
  return (
    <>
      <HeadData />
      <Nav setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      {children}

      {contact ? <FooterCopyright /> : <Footer />}
    </>
  );
}

export default Layout;
