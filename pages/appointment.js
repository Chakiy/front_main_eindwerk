import Layout from "../components/Layout";
import Booking from "../components/booking/Booking";
import nookies from "nookies";
import jwt_decode from "jwt-decode";

// import HeadData from "../components/HeadData";

function Appointment({ loggedIn, setLoggedIn, bookings }) {
  const dateArray = bookings.map((book) => book.date.slice(0, 10));
  const timeArray = bookings.map((book) => book.time.slice(11, 19));
  // console.log(dateArray);
  // console.log(timeArray);

  return (
    <>
      <Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
        {/* {console.log(bookings)} */}
        <Booking
          bookings={bookings}
          dateArray={dateArray}
          timeArray={timeArray}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
      </Layout>
    </>
  );
}

export default Appointment;
export async function getServerSideProps() {
  const resp = await fetch(
    `https://wdev2.be/khachatur21/eindwerk/api/appointments.json`
  );

  // console.log(resp);
  const bookings = await resp.json();
  // console.log(bookings);

  return {
    props: { bookings },
    // revalidate: 1,
  };
}
