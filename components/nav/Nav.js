import LinkA from "../Link/LinkA";
import style from "./Nav.module.scss";
import Icon from "../Icon";
import LoginForm from "../login/loginForm/LoginForm";
import { useRef } from "react";
function Nav({ setLoggedIn, loggedIn }) {
  const myRef = useRef();
  function myFunction() {
    myRef.current.classList.toggle(style.show);
  }

  return (
    <header className={style.header}>
      <div className="wrapper">
        <nav>
          <a className={style.logoName} href="/" title="beauty-logo">
            <span className={style.beautyText}>Beauty Salon Lakshmi</span>
          </a>
          <ul>
            <li>
              <LinkA href="/" text="Home" />
            </li>
            <li>
              <LinkA href="/about" text="About" />
            </li>
            <li>
              <LinkA href="/procedures" text="Services" />
            </li>
            <li>
              <LinkA href="#" text="Gallery" />
            </li>
            <li>
              <LinkA href="/contacts" text="Contacts" />
            </li>
            <li>
              <LinkA href="/appointment" text="Appointment" />
            </li>
            <li className={style.account}>
              <div className={style.icon} onClick={myFunction}>
                <Icon
                  icon="user"
                  size={18}
                  color="white"
                  className={style.iconn}
                />
              </div>
              <div ref={myRef} className={style.login}>
                <LoginForm
                  myRef={myRef}
                  setLoggedIn={setLoggedIn}
                  loggedIn={loggedIn}
                />
              </div>
            </li>

            {/* <li>
              <LinkA href="/registration" text="Register" />
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
