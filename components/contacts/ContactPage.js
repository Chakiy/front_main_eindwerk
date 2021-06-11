import FooterCopyright from "../footer/footerCopyright/FooterCopyright";
import FooterMap from "../footer/footerMap/FooterMap";
import Nav from "../nav/Nav";
import ContactForm from "./contactForm/ContactForm";
import ContactInfo from "./contactInfo/ContactInfo";
import styles from "./ContactPage.module.scss";

function ContactPage() {
  return (
    <>
      <Nav />
      <div className="wrapper">
        <div className={styles.map}>
          <h1>Location</h1>
          <FooterMap height="300" />
        </div>
        <div className={styles.infoContactForm}>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <FooterCopyright />
    </>
  );
}

export default ContactPage;
