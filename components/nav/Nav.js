import LinkA from "../Link/LinkA";
import style from "./Nav.module.scss";

function Nav() {
  return (
    <header className={style.header}>
      <div className="wrapper">
        <nav>
          <a className={style.logoName} href="/" title="beauty-logo">
            <span className={style.beautyText}>Beauty Salon</span>
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
            <li>
              <LinkA href="/login" text="Login" />
            </li>
            <li>
              <LinkA href="/register" ext="Register" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
