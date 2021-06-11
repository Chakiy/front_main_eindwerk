import Icon from "../../Icon";
import style from "./ContactBlock.module.scss";

function ContactBlock({ iconName, header, textOne, textTwo = "" }) {
  return (
    <>
      <div className={style.square}>
        <div className={style.icon}>
          <Icon icon={iconName} size={30} color="white" />
        </div>
        <div className={style.textContent}>
          <h4>{header}</h4>
          <p>{textOne}</p>
          <p>{textTwo}</p>
        </div>
      </div>
    </>
  );
}

export default ContactBlock;
