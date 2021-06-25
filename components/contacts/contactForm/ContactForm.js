import styles from "./ContactForm.module.scss";
import { useState } from "react";
import axios from "axios";
function ContactForm() {
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [questionAbout, setQuestionAbout] = useState("");
  const [message, setMessage] = useState("");

  function onNameChange(event) {
    setName(event.target.value);
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onQuestionChange(event) {
    setQuestionAbout(event.target.value);
  }

  function onMessageChange(event) {
    setMessage(event.target.value);
  }

  function resetForm() {
    setName("");
    setEmail("");
    setQuestionAbout("");
    setMessage("");
  }
  function handleSubmit(event) {
    event.preventDefault();

    if (
      name != "" &&
      name.includes("=") != -1 &&
      email != "" &&
      email.indexOf("@") != -1
    ) {
      setErrorName("");
      setErrorEmail("");
      axios.post(
        "https://wdev2.be/khachatur21/eindwerk/myapi/questions",
        `name=${name}&email=${email}&questionAbout=${questionAbout}&message=${message}`
      );

      resetForm();
    } else {
      setErrorName("This form contains some errors!");
    }
  }
  return (
    <>
      <div className={styles.contactForm}>
        <h6>Email us with any questions.</h6>
        {/* {errorName != "" && <p>This form contains errors</p>} */}

        <form id="contact-form" onSubmit={handleSubmit} method="POST">
          <div className={styles.formData}>
            {/* <label htmlFor="name">Name</label> */}
            {errorName != "" && (
              <p className={styles.error}>This form contains errors</p>
            )}

            <input
              type="text"
              placeholder="Name"
              name="name"
              // id="name"
              value={name}
              onChange={onNameChange}
            />

            {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
            {errorEmail != "" && (
              <p className={styles.error}>This please write correct email</p>
            )}
            <input
              type="email"
              placeholder="Email"
              aria-describedby="emailHelp"
              name="email"
              // id="email"
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <input
            type="text"
            placeholder="Question about"
            name="questionAbout"
            // id="questionAbout"
            value={questionAbout}
            onChange={onQuestionChange}
          />

          {/* <label htmlFor="message">Message</label> */}
          <textarea
            className="form-control"
            rows="10"
            placeholder="Message"
            name="message"
            // id="message"
            value={message}
            onChange={onMessageChange}
          />

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
    </>
  );
}

export default ContactForm;
