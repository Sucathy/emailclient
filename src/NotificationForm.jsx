import axios from "axios";
import React, { useState } from "react";
import styles from "./NotificationForm.module.css";

const NotificationForm = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3000/send-notification", {
        to,
        subject,
        text,
      });
      alert("Notification sent");
    } catch (error) {
      console.error("Failed to send notification", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Email Service</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          To
          <input
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Recipient"
            required
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Subject
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            required
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Message
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Message"
            required
            className={styles.textarea}
          />
        </label>
        <button type="submit" className={styles.button}>
          Send Notification
        </button>
      </form>
    </div>
  );
};

export default NotificationForm;
