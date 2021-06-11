import Icon from "../../Icon";
import styles from "./ContactInfo.module.scss";

function ContactInfo() {
  return (
    <>
      <div className={styles.info}>
        <div className={styles.contactInfo}>
          <h6>Address:</h6>
          <div className={styles.iconInfo}>
            <Icon icon="location" size={18} color="gray" />
            <p>Stationstraat 33 8000 Brugge</p>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <h6>Phones:</h6>
          <div className={styles.iconInfo}>
            <Icon icon="phone" size={18} color="gray" />
            <p>+32 499334420</p>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <h6>E-mail:</h6>
          <Icon icon="time" size={18} color="gray" />
          <a href="mailto:casilias35@hotmail.com">casilias35@hotmail.com</a>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
