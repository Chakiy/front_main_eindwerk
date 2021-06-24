// import Layout from "../Layout";
import styles from "./Booking.module.scss";

import React from "react";
// import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, Page, localeNl, setOptions } from "@mobiscroll/react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

function Booking({ bookings, loggedIn }) {
  const [procedure, setProcedure] = useState("");
  const [dataValue, setDataValue] = useState(new Date());
  const [dateBookings, setDateBookings] = useState(bookings);
  const [bookedFull, setBookedFull] = useState(false);

  //take user Id if user logged in
  const [userId, setUserId] = useState(
    loggedIn
      ? jwt_decode(Cookies.get("JWT")).id.toString()
      : "no user logged in"
  );

  const [invalidDate, setInvalidDate] = useState([
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
    {
      start: "13:00",
      end: "13:59",
      recurring: {
        repeat: "daily",
      },
    },
    {
      start: "00:01",
      end: "08:59",
      recurring: {
        repeat: "daily",
      },
    },
    {
      start: "19:01",
      end: "23:59",
      recurring: {
        repeat: "daily",
      },
    },
    {
      start: "2021-06-28T10:00",
      end: "2021-06-28T10:29",
    },
    {
      start: "2021-06-28T10:29",
      end: "2021-06-28T10:59",
    },
    {
      start: "2021-09-15T10:00",
      end: "2021-09-15T10:29",
    },
  ]);

  useEffect(() => {
    console.log(dateBookings);
    console.log(invalidDate);

    // console.log(lastOneDate);
  }, [dateBookings]);

  //Todays day
  const today = new Date();

  const lastOneDate = dateBookings.filter((el) => el.slot === 2);

  function onProcedureChange(event) {
    // console.log(event.target.value);
    setProcedure(event.target.value);
  }

  function onDateChange(e) {
    setBookedFull(false);
    console.log(e.value.slice(0, 14));
    setDataValue(e.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // mappen van alle booking datums ze afkortenn en in een Dates Array steken
    const dates = dateBookings.map((book) => book.date.slice(0, 10));
    // dates array filteren en kijken of ze gelijk zijnn met gekozen datum
    const filteredDayData = dates.filter(
      (data) => data === dataValue.slice(0, 10)
    );
    //hoeveel boekingen zijn er op die dag al gebeurt (slots)
    const countSlotDay = filteredDayData.length;

    if (filteredDayData.length === 0) {
      console.log("new day appointment");
      axios({
        method: "POST",
        url: `https://wdev2.be/khachatur21/eindwerk/api/appointments.json`,
        data: {
          date: dataValue,
          time: dataValue.slice(11, 16),
          customerApp: `/khachatur21/eindwerk/api/customers/${userId}`,
          service: `/khachatur21/eindwerk/api/services/${procedure}`,
          slot: 10,
        },
      }).then((response) => {
        console.log(response.data.date);

        const alo = invalidDate.filter(
          (el) => el.start && el.end && !el.recurring
        );
        setDateBookings([...dateBookings, response.data]);

        setInvalidDate([
          ...invalidDate,

          response.data.date.slice(14, 16) === "00"
            ? alo.filter(
                (el) =>
                  el.start.getTime() ===
                  new Date(response.data.date.slice(0, 14) + "30").getTime()
              )
              ? {
                  start: new Date(response.data.date.slice(0, 14) + "00"),
                  end: new Date(response.data.date.slice(0, 14) + "59"),
                }
              : {
                  start: new Date(response.data.date.slice(0, 16)),
                  end: new Date(response.data.date.slice(0, 14) + "29"),
                }
            : alo.filter(
                (el) =>
                  el.end.getTime() ===
                  new Date(response.data.date.slice(0, 14) + "29").getTime()
              )
            ? {
                start: new Date(response.data.date.slice(0, 14) + "00"),
                end: new Date(response.data.date.slice(0, 14) + "59"),
              }
            : {
                start: new Date(response.data.date.slice(0, 16)),
                end: new Date(response.data.date.slice(0, 14) + "59"),
              },
        ]);
      });
    } else {
      if (10 - countSlotDay === 1) {
        console.log("ABRAKADABRA this day is full booked");
        // setInvalidDate([...invalidDate, dataValue]);
        setBookedFull(true);
      } else {
        if (10 - countSlotDay === 1) {
          console.log("ABRAKADABRA is gelijkaan 2");
          setInvalidDate([...invalidDate, dataValue]);
        }

        console.log("making same day anoter appointment");
        axios({
          method: "POST",
          url: `https://wdev2.be/khachatur21/eindwerk/api/appointments.json`,
          data: {
            date: dataValue,
            time: dataValue.slice(11, 16),
            customerApp: `/khachatur21/eindwerk/api/customers/${userId}`,
            service: `/khachatur21/eindwerk/api/services/${procedure}`,
            slot: 10 - countSlotDay,
          },
        }).then((response) => {
          console.log(response.data);
          setDateBookings([...dateBookings, response.data]);

          const alo = invalidDate.filter(
            (el) => el.start && el.end && !el.recurring
          );

          console.log(response.data.date.slice(0, 14) + "30");

          const aloNext = alo.filter(
            (el) => el.end.getTime() === new Date("2021-06-28T10:29").getTime()
          );

          setInvalidDate([
            ...invalidDate,

            response.data.date.slice(14, 16) === "00"
              ? alo.filter(
                  (el) =>
                    el.start.getTime() ===
                    new Date(response.data.date.slice(0, 14) + "30").getTime()
                )
                ? {
                    start: new Date(response.data.date.slice(0, 14) + "00"),
                    end: new Date(response.data.date.slice(0, 14) + "59"),
                  }
                : {
                    start: new Date(response.data.date.slice(0, 16)),
                    end: new Date(response.data.date.slice(0, 14) + "29"),
                  }
              : alo.filter(
                  (el) =>
                    el.end.getTime() ===
                    new Date(response.data.date.slice(0, 14) + "29").getTime()
                )
              ? {
                  start: new Date(response.data.date.slice(0, 14) + "00"),
                  end: new Date(response.data.date.slice(0, 14) + "59"),
                }
              : {
                  start: new Date(response.data.date.slice(0, 16)),
                  end: new Date(response.data.date.slice(0, 14) + "59"),
                },
          ]);
        });
        // console.log(dateBookings);
      }
    }
  }

  return (
    <>
      <form id="userform" onSubmit={handleSubmit} method="POST">
        <div className={styles.proceduresBlock}>
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
            <option className={styles.options} value="2">
              Botox
            </option>
            <option value="3">Filler</option>
            <option value="4">Liquid Facelift</option>
            <option value="5">Peeling</option>
          </select>
        </div>
        {bookedFull && <p>This day is full booked</p>}

        <Page>
          <div className={styles.datatime}>
            <div className={styles.calendar}>
              <Datepicker
                timeFormat="HH:mm"
                stepMinute={60}
                returnFormat="iso8601"
                value={dataValue}
                onChange={onDateChange}
                theme="ios"
                themeVariant="dark"
                showOuterDays={false}
                controls={["calendar", "time"]}
                locale={localeNl}
                headerText="Your choosen date/time: {value}"
                //disable start and end time
                min={today}
                max="2023-01-01"
                // disable range
                invalid={[...invalidDate, ...lastOneDate]}
                display="inline"
                // colors={colors}
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

export default Booking;
