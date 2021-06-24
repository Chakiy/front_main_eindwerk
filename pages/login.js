import Layout from "../components/Layout";
import style2 from "./login.module.scss";
import Link from "next/dist/client/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import nookies, { setCookie } from "nookies";

function Login(props) {
  console.log(props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState(false);
  const [kook, setKook] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log(kook);
    if (kook) {
      setErr(false);
      props.setLoggedIn(true);
    }
    if (errMessage) {
      setErr(true);
      props.setLoggedIn(false);
    }
    if (kook && errMessage) {
      setErr(false);
      props.setLoggedIn(true);
    }
  }, [kook, errMessage]);

  function onEmailChange(event) {
    console.log(event.target.value);
    setEmail(event.target.value);
  }
  function onPasswordChange(event) {
    console.log(event.target.value);
    setPassword(event.target.value);
  }
  function logout(event) {
    event.preventDefault();
    Cookies.remove("JWT");
    Cookies.remove("errore");
    setErr("");
    props.setLoggedIn(false);
    router.push("/");
  }
  function handleSubmit(event) {
    event.preventDefault();
    get_JWT();
    console.log(Cookies.get("JWT"));
    setEmail("");
    setPassword("");

    if (kook) {
      console.log(kook);
      // setErr(true);
      setErr(false);
      props.setLoggedIn(true);
    }

    if (errMessage) {
      setErr(true);
      props.setLoggedIn(false);
    }
    router.push("/procedures");
  }

  function get_JWT() {
    //axios automatically detects request body als JSON, and sends application/json header
    axios
      .post("https://wdev2.be/khachatur21/eindwerk/api/login_check", {
        username: email,
        password: password,
      })
      .then(
        // console.log
        (response) => {
          // console.log(response.data.token);
          // console.log(response.data.error);

          const token = response.data.token;
          Cookies.set("JWT", token);
          setKook(Cookies.set("JWT", token));
        }
      )
      .catch((error) => {
        console.log(error.response.data.message);
        // const errorCookie = error.response.data.message
        setErrMessage(error.response.data.message);
      });
  }
  return (
    <>
      <Layout>
        <div className="wrapper">
          <div className={style2.loginForm} id="aaaaaa">
            {err && (
              <p className={style2.error}>{"Email or password is wrong"}</p>
            )}
            <form id="loginForm" method="POST" onSubmit={handleSubmit}>
              <div className="formData">
                <h6>Email</h6>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  // id="email"
                  value={email}
                  onChange={onEmailChange}
                />
              </div>
              <div className="formData">
                <h6>Password</h6>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  // id="name"
                  value={password}
                  onChange={onPasswordChange}
                />
              </div>

              <button type="submit" className={style2.buttonLogin}>
                {" "}
                LOGIN{" "}
              </button>
            </form>
            <Link href="/registration">
              <a className={style2.registrationLink}>Create an account</a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Login;
