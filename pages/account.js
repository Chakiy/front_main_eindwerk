import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import styles from "./account.module.scss";
import nookies from "nookies";
import axios from "axios";
import { useRouter } from "next/router";

function Account({ customer, decodedId, token, setLoggedIn, loggedIn }) {
  const router = useRouter();

  const [name, setName] = useState(customer.name);
  const [lastName, setLastName] = useState(customer.lastName);
  const [gsm, setGsm] = useState(customer.gsm);
  const [sex, setSex] = useState(customer.sex);
  const [bday, setBday] = useState(customer.bday);
  const [street, setStreet] = useState(customer.address.street);
  const [streetNr, setStreetNr] = useState(customer.address.streetNr);
  const [zipCode, setZipCode] = useState(customer.address.zipCode);
  const [city, setCity] = useState(customer.address.city);
  const [email, setEmail] = useState(customer.email);
  const [password, setPassword] = useState(customer.password);

  // const [user, setUser] = useState();
  // const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(token);
    if (token) {
      setLoading(false);
    }
  }, []);

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

  function onStreetChange(event) {
    setStreet(event.target.value);
  }
  function onStreetNrChange(event) {
    setStreetNr(toString(event.target.value));
  }
  function onZipCodeChange(event) {
    setZipCode(event.target.value);
  }
  function onCityChange(event) {
    setCity(event.target.value);
  }
  function ifStateChanges(name, lastName) {
    setName(name);
    setLastName(lastName);
  }
  function handleSubmit(event) {
    event.preventDefault();

    axios({
      method: "PUT",
      url: `https://wdev2.be/khachatur21/eindwerk/api/customers/${decodedId}.json`,
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
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response.data);
      // const { name, lastName } = response.data;
      setName(response.data.name);
      // if (response.data !== "") {
      //   // alert("Message Sent.");
      //   console.log(response.data);
      //   // resetForm();
      // } else if (response.data.status === "fail") {
      //   alert("Message failed to send.");
      // }
      // window.location.href = "/";
    });
  }

  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : (
        <Layout setLoggedIn={setLoggedIn} loggedIn={loggedIn}>
          <div className="wrapper">
            <div className={styles.contactForm}>
              <div className={styles.register}>
                <h3>User</h3>
                <h2>Detail</h2>
              </div>
              <form id="userform" onSubmit={handleSubmit} method="POST">
                <div className={styles.form}>
                  <div className={styles.leftBlock}>
                    <div className={styles.formData}>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        placeholder={customer.name}
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
                        placeholder={customer.lastName}
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
                        type="text"
                        placeholder={customer.gsm}
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
                        placeholder={customer.sex}
                        value={sex}
                        onChange={onSexChange}
                        required
                      >
                        <option value={sex} disabled hidden>
                          {customer.sex}
                        </option>
                        <option value="Man">Man</option>
                        <option value="Woman">Woman</option>
                      </select>
                    </div>
                    <div className={styles.formData}>
                      <label htmlFor="bday">Birth Day</label>
                      <input
                        type="text"
                        placeholder={customer.bday.slice(0, 10)}
                        name="bday"
                        id="bday"
                        value={bday.slice(0, 10)}
                        // onChange={onBdayChange}
                        disabled
                      />
                    </div>
                  </div>
                  <div className={styles.rightBlock}>
                    <div className={styles.formData}>
                      <label htmlFor="street">Street</label>
                      <input
                        type="text"
                        placeholder={customer.address.street}
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
                        type="number"
                        placeholder={customer.address.streetNr}
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
                        placeholder={customer.address.zipCode}
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
                        placeholder={customer.address.city}
                        name="city"
                        id="city"
                        value={city}
                        onChange={onCityChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className={styles.buttonEdit}>
                  {" "}
                  change{" "}
                </button>
              </form>

              <div className={styles.register}>
                <h3>User</h3>
                <h2>Bookings</h2>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}

export default Account;

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);
  const token = cookies.JWT;
  console.log(cookies);

  const decoded = jwt_decode(token);
  const decodedId = decoded.id;
  console.log(decoded.id);

  const resp = await fetch(
    `https://wdev2.be/khachatur21/eindwerk/api/customers/${decodedId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  // console.log(resp);
  const customer = await resp.json();
  console.log(customer);

  return {
    props: { customer, decodedId, token },
  };
}
