import "../styles/Home.scss";
import "@mobiscroll/react/dist/css/mobiscroll.scss";
import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { ThemeProvider, theme, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

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

  const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  });

  const theme = extendTheme({
    breakpoints,
  });
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <Component
          {...pageProps}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
