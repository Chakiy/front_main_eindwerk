// import Layout from "../Layout";
import styles from "./Booking.module.scss";

import React from "react";
// import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, Page, localeNl, setOptions } from "@mobiscroll/react";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

function Booking({ cleanBookings, loggedIn }) {
  // console.log(Cookies.get("JWT"));
  // const token = Cookies.get("JWT");
  // const decoded = jwt_decode(token);
  // console.log(decoded);
  // const decodedId = decoded.id;
  // console.log(decodedId);

  const [dataValue, setDataValue] = useState(new Date());
  // console.log(decodedId);
  console.log(loggedIn);
  const today = new Date();

  // let dayToday = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();

  let dayChecker = today;

  const dataArray = cleanBookings.map((el) => ({
    date: el.slice(0, 10),
    background: "red",
  }));
  // today.getHours() + ":" + today.getMinutes > "16:30"
  //   ? (dayToday =
  //       today.getFullYear() +
  //       "-" +
  //       now.getMonth() +
  //       "-" +
  //       (now.getDate() + 1))
  //   : dayToday;
  console.log(dataArray);

  const [colors] = React.useState(
    // recurring:(povtorjaushiesja) { repeat: "yearly" - celij god, month: 12, day: 24 },
    // leanBookings.map((el) => el.slice(0, 10))
    dataArray
    // {
    //   date: new Date(now.getFullYear(), now.getMonth(), 4),
    //   background: "red",
    // },
    // {
    //   date: "2021-06-25",
    //   background: "red",
    // },
  );

  function onChange(e) {
    console.log(e.value);
    setDataValue(e.value);
  }

  function handleSubmit() {
    // event.preventDefault();
    //     get voor post
    // logica
    axios({
      method: "POST",
      url: `https://wdev2.be/khachatur21/eindwerk/api/appointments.json`,
      data: {
        date: dataValue,
        time: "2021-06-19T18:41:03.658Z",
        customerApp: `/khachatur21/eindwerk/api/customers/56`,
        service: "/khachatur21/eindwerk/api/services/5",
      },
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    }).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <>
      <form id="userform" onSubmit={handleSubmit} method="POST">
        <Page>
          <div className={styles.datatime}>
            <div className={styles.calendar}>
              <Datepicker
                returnFormat="iso8601"
                value={dataValue}
                onChange={onChange}
                // theme="ios"
                // themeVariant="dark"
                showOuterDays={false}
                controls={["calendar"]}
                locale={localeNl}
                headerText="You choose: {value}"
                //disable start and end time
                min={dayChecker}
                // min={now}
                max="2023-01-01"
                // disable range
                invalid={[
                  {
                    recurring: {
                      repeat: "weekly",
                      weekDays: "SA,SU",
                    },
                  },
                  {
                    recurring: {
                      repeat: "yearly",
                      day: 24,
                      month: 12,
                    },
                  },
                  {
                    recurring: {
                      repeat: "yearly",
                      day: 31,
                      month: 12,
                    },
                  },
                  // {
                  //   recurring: {
                  //     repeat: "yearly",
                  //     day: 31,
                  //     month: 12,
                  //   },
                  // },
                ]}
                display="inline"
                colors={colors}
              />
            </div>
          </div>
        </Page>
        {loggedIn ? (
          <button type="submit" className={styles.buttonBook}>
            {" "}
            book{" "}
          </button>
        ) : (
          <Link href="/login">
            <a className={styles.buttonBook}> Login </a>
          </Link>
        )}
      </form>
    </>
  );
}
// className={styles.buttonEdit}
export default Booking;

{
  /* <div className={styles.time}>
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
          </div> */
}
