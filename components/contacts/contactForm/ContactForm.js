import styles from "./ContactForm.module.scss";
import { useState } from "react";
import axios from "axios";
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [questionAbout, setQuestionAbout] = useState("");
  const [message, setMessage] = useState("");

  function onNameChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function onEmailChange(event) {
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  function onQuestionChange(event) {
    console.log(event.target.value);
    setQuestionAbout(event.target.value);
  }

  function onMessageChange(event) {
    console.log(event.target.value);
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

    axios({
      method: "POST",
      url: "https://wdev2.be/khachatur21/eindwerk/api/questions.json",
      data: { name, email, questionAbout, message },
    }).then((response) => {
      console.log(response.data);
      resetForm();
      if (response.data.status === "success") {
        alert("Message Sent.");
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }
  return (
    <>
      <div className={styles.contactForm}>
        {console.log(name)}
        <h6>Email us with any questions.</h6>
        <form id="contact-form" onSubmit={handleSubmit} method="POST">
          <div className={styles.formData}>
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="text"
              placeholder="Name"
              //   name="name"
              value={name}
              onChange={onNameChange}
            />

            {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
            <input
              type="email"
              placeholder="Email"
              aria-describedby="emailHelp"
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <input
            type="text"
            placeholder="Question about"
            value={questionAbout}
            onChange={onQuestionChange}
          />

          {/* <label htmlFor="message">Message</label> */}
          <textarea
            className="form-control"
            rows="10"
            placeholder="Message"
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
