import styles from "./gallery.module.scss";
import Layout from "../components/Layout";
function Gallery() {
  return (
    <Layout contact={true}>
      <div className="wrapper">
        <div className={styles.gallery}>
          <h3>Our Gallery</h3>
          <h2>Comming Soon</h2>
        </div>
      </div>
    </Layout>
  );
}

export default Gallery;
