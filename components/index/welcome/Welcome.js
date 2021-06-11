import Image from "next/image";
import style from "./Welcome.module.scss";

function Welcome() {
  return (
    <>
      <div className="wrapper">
        <div className={style.box}>
          <Image
            src="/images/welcome.jpeg"
            alt="welcome foto"
            width={968}
            height={758}
          />
          <div className={style.textContent}>
            <h3>welcome to</h3>
            <h2>Beauty Salon Lakshmi</h2>
            {/* <h2>Lakshmi</h2> */}
            <p>
              We value our clients and know exactly what will suit you more and
              how to implement your most creative ideas into reality to enhance
              your natural looks and make you look gorgeous whenever you go!
              Trust us to make you look special!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
