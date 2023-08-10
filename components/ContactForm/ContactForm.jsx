import { useState, useEffect } from "react";
import classes from "./ContactForm.module.css";
import axios from "axios";
import { Notification } from "../ui/Notification";

const sendContactData = async (contactData) => {
  await axios.post("/api/contact", contactData);
};

export const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState("");

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timerId = setTimeout(() => {
        setRequestStatus("");
      }, 3000);

      return () => clearTimeout(timerId);
    }
  }, [requestStatus]);

  const handleChange = (event) => {
    if (event.target.id === "email") {
      setEnteredEmail(event.target.value);
    } else if (event.target.id === "name") {
      setEnteredName(event.target.value);
    } else {
      setEnteredMessage(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
    } catch {
      setRequestStatus("error");

      return;
    }

    setRequestStatus("success");
    setEnteredEmail("");
    setEnteredName("");
    setEnteredMessage("");
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: "Something went wrong...",
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="text"
              id="email"
              minLength="5"
              value={enteredEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            type="text"
            id="message"
            rows="5"
            value={enteredMessage}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.actions}>
          <button>Send message</button>
        </div>
      </form>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </section>
  );
};
