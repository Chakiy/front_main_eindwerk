import LinkA from "../Link/LinkA";
import style from "./Nav.module.scss";
import Icon from "../Icon";
import LoginForm from "../login/loginForm/LoginForm";
import { useRef } from "react";
import {
  HStack,
  Menu,
  MenuButton,
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";

function Nav({ setLoggedIn, loggedIn }) {
  const myRef = useRef();
  function myFunction() {
    myRef.current.classList.toggle(style.show);
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  function CloseDraw() {
    setTimeout(function () {
      onClose();
    }, 200);
  }

  return (
    <header className={style.header}>
      <div className="wrapper">
        <Box display={["none", "none", "none", "block", "block"]}>
          <nav>
            <a className={style.logoName} href="/" title="beauty-logo">
              <span className={style.beautyText}>
                <Box
                  display={["none", "none", "none", "none", "inline-block"]}
                  // fontSize={["32px", "32px", "32px", "48px"]}
                >
                  Beauty Salon
                </Box>{" "}
                Lakshmi
              </span>
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
                <LinkA href="/gallery" text="Gallery" />
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
        </Box>
        <Box display={["block", "block", "block", "none", "none"]}>
          <nav>
            <a className={style.logoName} href="/" title="beauty-logo">
              <span className={style.beautyText}>Lakshmi</span>
            </a>

            <Button
              fontSize="1.8em"
              bg="transparent"
              color="#ec8bb3"
              border="none"
              ref={btnRef}
              onClick={onOpen}
              transition=".4s"
              _focus={{ outline: 0 }}
              _hover={{
                opacity: 0.6,
              }}
            >
              <HamburgerIcon />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent bg="BLACK" opacity="0.8">
                <DrawerCloseButton
                  fontSize="1.3em"
                  mx={4}
                  my={3}
                  _focus={{ outline: 0 }}
                  _hover={{ background: "none", opacity: 0.6 }}
                />
                <DrawerHeader
                  borderBottom="1px solid #ec8bb3"
                  my={3}
                  fontSize="18px"
                >
                  Lakshmi
                </DrawerHeader>

                <DrawerBody>
                  <HStack flexDirection="column">
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
                        <LinkA href="/gallery" text="Gallery" />
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
                    </ul>
                  </HStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </nav>
        </Box>
      </div>
    </header>
  );
}

export default Nav;
