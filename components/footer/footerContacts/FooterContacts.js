import ContactBlock from "./ContactBlock";
import style from "./FooterContacts.module.scss";
import { Flex } from "@chakra-ui/react";

function FooterContacts() {
  return (
    <>
      <div className={style.box}>
        <div className="wrapper">
          <div className={style.flex}>
            {/* <Flex
              flexDirection={["column", "column", "column", "row", "row"]}
              justifyContent="space-between"
            > */}
            <ContactBlock
              iconName="location"
              header="Address:"
              textOne="Stationstraat 33"
              textTwo="8000 Brugge"
            />
            <ContactBlock
              iconName="phone"
              header="Have a Question? Call us:"
              textOne="+32 499334420"
              textTwo=""
            />
            <ContactBlock
              iconName="time"
              header="Working tome:"
              textOne="Monday-Friday"
              textTwo="10:00-17:00"
            />
            {/* </Flex> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterContacts;
