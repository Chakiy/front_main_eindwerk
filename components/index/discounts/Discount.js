import style from "./Discount.module.scss";
import Image from "next/image";
import Button from "../../Button/Button";
function Discount() {
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
            <h2 className={style.parallaxContentText}>
              Book your visit online
            </h2>
            <h2 className={style.parallaxContentHeader}>Save up to 30% off </h2>
            <p className={style.parallaxContentDescription}>
              We make a discount only for those our customers who make an
              appointment, so hurry up to make an appointment with our
              specialists to save up to 30%!
            </p>
          </div>
          <Button href="/appointment" text="Make an appointment" />
        </div>
      </div>
    </>
  );
}

export default Discount;
