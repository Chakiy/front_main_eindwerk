import Link from "next/link";
import style from "./LinkA.module.scss";

function LinkA({ href, text, close }) {
  return (
    <Link href={href}>
      <a className={style.link}>{text}</a>
    </Link>
  );
}

export default LinkA;
