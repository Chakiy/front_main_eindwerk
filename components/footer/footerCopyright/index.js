import style from "./FooterCopyright.module.scss";
function FooterCopyright() {
  return (
    <>
      <div className={style.box}>
        <div className="wrapper">
          <div className={style.salon}>
            <h4> Beauty Salon Lakshmi</h4>
          </div>
          <div className={style.copyrights}>
            <p>Copyright @ 2021 Khachatur Hovsepyan. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterCopyright;
