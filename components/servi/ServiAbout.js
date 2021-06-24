import style from "./ServiAbout.module.scss";
import { useState, useEffect } from "react";
// import Link from "next/link";
// import style from "../aboutUs/creation/AboutUsCreation.module.scss";
import ServiceContent from "./serviceContent/ServiceContent";
import Cookies from "js-cookie";
import { Grid } from "@chakra-ui/react";
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
            <Grid
              className="clubs"
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={[0, 0, 6, 10, 6]}
              p="1.5em"
            >
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
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiAbout;
