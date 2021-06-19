import style from "./OurTeam.module.scss";
import Image from "next/image";

function OurTeam() {
  return (
    <>
      <div className={style.box}>
        <div className="wrapper">
          <h3>Our Team</h3>
          <h2>OUR PROFESSIONAL'S</h2>
          <div className={style.profContent}>
            <div className={style.profBox}>
              <Image
                src="/images/pro1.jpeg"
                alt="welcome foto"
                width={384}
                height={443}
              />
              <h4>Doctor</h4>
            </div>
            <div className={style.profBox}>
              <Image
                src="/images/pro2.jpeg"
                alt="welcome foto"
                width={384}
                height={443}
              />
              <h4>Hair Stylish</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
