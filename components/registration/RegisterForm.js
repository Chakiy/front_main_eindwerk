import styles from "./RegisterForm.module.scss";
import { useState } from "react";
import axios from "axios";
function RegisterForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gsm, setGsm] = useState("");
  const [sex, setSex] = useState("");
  const [bday, setBday] = useState("");
  const [street, setStreet] = useState("");
  const [streetNr, setStreetNr] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onNameChange(event) {
    setName(event.target.value);
  }
  function onLastNameChange(event) {
    setLastName(event.target.value);
  }
  function onGsmChange(event) {
    setGsm(event.target.value);
  }
  function onSexChange(event) {
    setSex(event.target.value);
  }
  function onBdayChange(event) {
    setBday(event.target.value);
  }
  function onStreetChange(event) {
    setStreet(event.target.value);
  }
  function onStreetNrChange(event) {
    setStreetNr(event.target.value);
  }
  function onZipCodeChange(event) {
    setZipCode(event.target.value);
  }
  function onCityChange(event) {
    setCity(event.target.value);
  }
  function onEmailChange(event) {
    setEmail(event.target.value);
  }
  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function resetForm() {
    setName("");
    setLastName("");
    setGsm("");
    setSex("");
    setBday("");
    setStreet("");
    setStreetNr("");
    setZipCode("");
    setCity("");
    setEmail("");
    setPassword("");
  }
  function handleSubmit(event) {
    event.preventDefault();

    axios({
      method: "POST",
      url: "https://wdev2.be/khachatur21/eindwerk/api/customers.json",
      data: {
        name,
        lastName,
        gsm,
        bday,
        sex,
        email,
        password,
        address: {
          street,
          streetNr,
          zipCode,
          city,
        },
      },
    }).then((response) => {
      console.log(response);

      if (response.data !== "") {
        // alert("Message Sent.");
        console.log(response.data);
        resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
      window.location.href = "/";
    });
  }
  return (
    <>
      <div className="wrapper">
        <div className={styles.contactForm}>
          <div className={styles.register}>
            <h3>User</h3>
            <h2>Registration</h2>
          </div>
          <form id="contact-form" onSubmit={handleSubmit} method="POST">
            <div className={styles.formData}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                value={name}
                onChange={onNameChange}
                required
              />
            </div>
            <div className={styles.formData}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={onLastNameChange}
                required
              />
            </div>
            <div className={styles.formData}>
              <label htmlFor="gsm">Gsm</label>
              <input
                type="number"
                placeholder="Gsm"
                name="gsm"
                id="gsm"
                value={gsm}
                onChange={onGsmChange}
                required
              />
            </div>
            <div className={styles.formData}>
              <label htmlFor="sex">Gender</label>

              <select
                name="sex"
                id="sex"
                placeholder="Sex"
                value={sex}
                onChange={onSexChange}
                required
              >
                <option value="" selected disabled hidden>
                  Select your Gender
                </option>
                <option value="Man">Man</option>
                <option value="Woman">Woman</option>
              </select>
            </div>
            <div className={styles.formData}>
              <label htmlFor="bday">Birth Day</label>
              <input
                type="date"
                placeholder="Birth Day"
                name="bday"
                id="bday"
                value={bday}
                onChange={onBdayChange}
                required
              />
            </div>
            <div className={styles.formData}>
              <label htmlFor="street">Street</label>
              <input
                type="text"
                placeholder="Street"
                name="street"
                id="street"
                value={street}
                onChange={onStreetChange}
                required
              />
            </div>
            <div className={styles.formData}>
              <label htmlFor="streetNr">Street nr</label>
              <input
                type="text"
                placeholder="Street nr"
                name="streetNr"
                id="streetNr"
                value={streetNr}
                onChange={onStreetNrChange}
                required
              />
            </div>
            <div className={styles.formData}>
              <label htmlFor="zipCode">Zip code</label>
              <input
                type="text"
                placeholder="Zip code"
                name="zipCode"
                id="zipCode"
                value={zipCode}
                onChange={onZipCodeChange}
                required
              />
            </div>
            <div className={styles.formData}>
              <label htmlFor="city">City</label>
              <input
                type="text"
                placeholder="City"
                name="city"
                id="city"
                value={city}
                onChange={onCityChange}
                required
              />
            </div>
            <div className={styles.formData}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                value={email}
                onChange={onEmailChange}
                required
              />
            </div>

            <div className={styles.formData}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={password}
                onChange={onPasswordChange}
                required
              />
            </div>

            <div className={styles.buttonSection}>
              <button type="submit" className={styles.buttonSend}>
                {" "}
                SEND{" "}
              </button>
              <button type="reset" className={styles.button}>
                {" "}
                clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
