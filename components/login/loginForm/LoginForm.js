import style2 from "./LoginForm.module.scss";
import Link from "next/dist/client/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import nookies, { setCookie } from "nookies";
import style from "../../nav/Nav.module.scss";

function LoginForm(props) {
  console.log(props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState("");
  const router = useRouter();

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
    props.setLoggedIn(false);
    router.push("/");
  }
  function handleSubmit(event) {
    event.preventDefault();
    get_JWT();
    props.myRef.current.classList.remove(style.show);
    props.setLoggedIn(true);
    router.push("/");
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
          const token = response.data.token;
          console.log(token);
          Cookies.set("JWT", token);
        }
      )
      .catch((error) => {
        console.log(error.response.data.message);
        setErr(error.response.data.message);
      });
  }
  return (
    <>
      {/* Cookies.get("JWT") */}
      {props.loggedIn ? (
        <div className={style2.loginForm} id="aaaaaa">
          <p>Welcome back</p>
          <Link href="/account" className={style2.myAccount}>
            <a>My account</a>
          </Link>
          <form onSubmit={logout}>
            <button type="submit" className={style2.buttonLogin}>
              LOGOUT
            </button>
          </form>
        </div>
      ) : (
        <div className={style2.loginForm} id="aaaaaa">
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
      )}
      {/* {Cookies.get("L") &&  } */}

      {/* {err != "" && (
          <p className={style.error}>Email or password is not correct</p>
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

          <button type="submit" className={style.buttonLogin}>
            {" "}
            LOGIN{" "}
          </button>
        </form> */}

      {/* </div> */}
    </>
  );
}

export default LoginForm;
