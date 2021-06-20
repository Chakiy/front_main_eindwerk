import "../styles/Home.scss";
import "@mobiscroll/react/dist/css/mobiscroll.scss";
import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

function MyApp({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const jwt = Cookies.get("JWT");
    console.log(jwt);
    if (jwt) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);
  return (
    <Component {...pageProps} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
  );
}

export default MyApp;
