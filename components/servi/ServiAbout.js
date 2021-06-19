import style from "./ServiAbout.module.scss";
import { useState, useEffect } from "react";
// import Link from "next/link";
// import style from "../aboutUs/creation/AboutUsCreation.module.scss";
import ServiceContent from "./serviceContent/ServiceContent";
import Cookies from "js-cookie";
function ServiAbout({ services }) {
  // const [services, setServices] = useState(services);
  // const [loading, setLoading] = useState(true);
  // services ? setLoading(false) : setLoading(true);
  useEffect(() => {
    console.log(services);
  }, []);
  return (
    <>
      <div className={style.box}>
        <div className="wrapper">
          <h3>Services</h3>
          <h2>Lakshmi</h2>
          <div className={style.servicesContent}>
            {/* {console.log(loading)}
            {services ? console.log(services) : console.log("helloooss")} */}

            {services.map((service) => (
              // <Link href={`/procedures/${service.name}`}>
              //   <a>
              <ServiceContent
                key={service.name}
                iconName="color"
                header={service.name}
                duration={service.duration + " min"}
                description={service.description}
              />
              //   </a>
              // </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiAbout;
