import Layout from "../components/Layout";
import AboutUsCreation from "../components/aboutUs/creation/AboutUsCreation";
import OurTeam from "../components/aboutUs/ourTeam/OurTeam";
import Award from "../components/aboutUs/award/Award";

import { Datepicker, Page, localeNl, setOptions } from "@mobiscroll/react";

import { useState } from "react";
function About({ loggedIn, setLoggedIn }) {
  const [procedure, setProcedure] = useState("");

  function onProcedureChange(event) {
    setProcedure(event.target.value);
    console.log(event.target.value);
  }

  return (
    <Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
      <AboutUsCreation />
      <Award />
      <OurTeam />

      {/* <div>
        <label htmlFor="procedure">Select your procedure</label>

        <select
          name="procedure"
          id="procedure"
          placeholder="procedure"
          value={procedure}
          onChange={onProcedureChange}
          required
        >
          <option value="" selected disabled hidden>
            Procedure
          </option>
          <option value="2">Botox</option>
          <option value="3">Filler</option>
          <option value="4">Liquid Facelift</option>
          <option value="5">Peeling</option>
        </select>
      </div>
      <Page>
        <div>
          <Datepicker
            controls={["time"]}
            timeFormat="HH:mm"
            stepMinute={15}
            // min={today.getHours()+':'+today.getMinutes < "10:00"  ? }
            min="10:00"
            max="16:30"
            locale={localeNl}
            headerText="Reservation Time: {value}"
            display="inline"
            // inRangeInvalid={true}
            // invalid={["10:45", "13:00"]}

            // invalid={[
            //   "2021-05-26",
            //   {
            //     recurring: {
            //       repeat: "weekly",
            //     },
            //   },
            //   {
            //     start: "12:00",
            //     end: "13:00",
            //   },
            // ]}
            // invalid={[
            //   {
            //     start: "12:00:00",
            //     end: "13:00:00",
            //   },
            // ]}
          />
        </div>
      </Page> */}
    </Layout>
  );
}

export default About;
