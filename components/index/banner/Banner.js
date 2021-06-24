import style from "./Banner.module.scss";
import Button from "../../Button/Button";
import { Box } from "@chakra-ui/react";

export default function Welcomscreen() {
  return (
    <div className={style.homeBanner}>
      <div className="wrapper">
        <h2 className={style.homeBannerTextStyle}>get your style</h2>
        <Box w={["100%", "100%", "80%", "60%", "40%"]}>
          <div className={style.homeBannerInfo}>
            <h1 className={style.homeBannerText}>
              <p>LOOK</p>
              <p>TODAY</p>
            </h1>
            <p className={style.homeBannerTextDescription}>
              Make your hairstyle an important part for the expression of your
              identity! Our licensed hair dressers will make sure you get the
              exact style you want!
            </p>

            <Button href="/appointment" text="Book" />
          </div>
        </Box>
      </div>
    </div>
  );
}
