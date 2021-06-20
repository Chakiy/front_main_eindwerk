import Layout from "../components/Layout";
import Booking from "../components/booking/Booking";
import nookies from "nookies";
import jwt_decode from "jwt-decode";

function Appointment({
  loggedIn,
  setLoggedIn,
  decodedId,
  token,
  cleanBookings,
}) {
  return (
    <>
      {/* <div>lkdnfdkc</div> */}
      <Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
        {/* <Booking
          cleanBookings={cleanBookings}
          // decodedId={decodedId}
          // token={token}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        /> */}
      </Layout>
    </>
  );
}

export default Appointment;
export async function getServerSideProps() {
  // const cookies = nookies.get(ctx);
  // const token = cookies.JWT;
  // console.log(cookies);

  // const decoded = jwt_decode(token);
  // const decodedId = decoded.id;
  // console.log(decodedId);

  const resp = await fetch(
    `https://wdev2.be/khachatur21/eindwerk/api/appointments.json`
  );

  console.log(resp);
  const bookings = await resp.json();
  console.log(bookings);
  // const cleanBookings = bookings.map((book) => book.date);
  // console.log(cleanBookings);

  // const userBooking = bookings.filter(
  //   (book) =>
  //     book.customerApp === `/khachatur21/eindwerk/api/customers/${decodedId}`
  // );
  // console.log(userBooking);
  // props: { customer, decodedId, token },
  return {
    props: { bookings },
    revalidate: 1,
  };
}
