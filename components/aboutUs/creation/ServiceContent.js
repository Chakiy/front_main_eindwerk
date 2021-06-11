import Icon from "../../Icon";
import style from "./ServiceContent.module.scss";

export default function ServiceContent({ header, description, iconName }) {
  return (
    <>
      <article className={style.articleName}>
        <div className={style.circle}>
          <Icon icon={iconName} size={30} color="white" />
        </div>
        <h4>{header}</h4>
        <p>{description}</p>
      </article>
    </>
  );
}
