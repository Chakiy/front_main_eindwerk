import style from "./AboutUsCreation.module.scss";
import ServiceContent from "./ServiceContent";
import { useState, useEffect } from "react";
import Link from "next/link";

function AboutUsCreation() {
  const [services, setServices] = useState([]);

  useEffect(async () => {
    const resp = await fetch(
      `https://wdev2.be/khachatur21/eindwerk/myapi/services`
    );
    const data = await resp.json();
    // console.log(data);
    setServices(data);
  }, []);

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
          <div className={style.servicesContent}>
            {/* {console.log(services)} */}

            {services.map((service) => (
              <Link href={`/procedures/${service.name}`}>
                <a>
                  <ServiceContent
                    key={service.name}
                    iconName="color"
                    header={service.name}
                    description={service.description}
                  />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsCreation;
