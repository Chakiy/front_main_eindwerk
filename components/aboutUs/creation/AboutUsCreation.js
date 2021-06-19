import style from "./AboutUsCreation.module.scss";

function AboutUsCreation() {
  return (
    <>
      <div className="wrapper">
        <div className={style.box}>
          <div className={style.aboutUsContent}>
            <div className={style.salonName}>
              <h3>about</h3>
              <h2>Beauty Salon Lakshmi</h2>
            </div>
            <div className={style.salonCreation}>
              <h4>
                Our beauty salon was founded in 2010, and since then we are
                trying to make our customers more happy and confident!
              </h4>
              <p>
                We started as a group of inspired hairdressers and stylists. Now
                we have a full-fledged team of specialists, who know what they
                do and have all the skills to enhance the natural beauty in you!
                We work with high-quality equipment and use high-quality
                materials only!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsCreation;
