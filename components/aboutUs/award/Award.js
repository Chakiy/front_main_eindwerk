import style from "./Award.module.scss";
import Image from "next/image";
import Button from "../../Button/Button";
function Award() {
  return (
    <>
      <div className={style.parallaxContainer}>
        <div className={style.parallax}>
          <Image
            src="/images/salon.jpeg"
            alt="Salon foto"
            width={2000}
            height={1311}
          />
        </div>
        <div className={style.parallaxContent}>
          <div className="wrapper">
            <h2 className={style.parallaxContentText}>Get your stylish</h2>
            <h2 className={style.parallaxContentHeader}>
              AWARD WINNING Beauty SALON{" "}
            </h2>
            <p className={style.parallaxContentDescription}>
              We are always willing to make our customers happy and are ready to
              support your most bold and creative ideas in haircuts and hair
              coloring! Feel free to express yourself through your looks!
            </p>
          </div>
          <Button href="/appointment" text="Make an appointment" />
        </div>
      </div>
    </>
  );
}

export default Award;
