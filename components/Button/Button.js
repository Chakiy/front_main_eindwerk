import Link from "next/link";
import style from "./Button.module.scss";

function Button({ href, text }) {
  return (
    <Link href={href}>
      <a className={style.button}>{text}</a>
    </Link>
  );
}

export default Button;
