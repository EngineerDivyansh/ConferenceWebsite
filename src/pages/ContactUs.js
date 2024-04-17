import React from "react";
import styles from "../styles/ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles["contact-container"]}>
      <h1>Contact Us</h1>
      <div className={styles["contact-info"]}>
        <p>
          <strong>Address:</strong> 123 Main Street, City, Country
        </p>
        <p>
          <strong>Email:</strong> contact@example.com
        </p>
        <p>
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>
      </div>
      <div className={styles["contact-form"]}>
        <h2>Send Us a Message</h2>
        <form>
          <div className={styles["form-group"]}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
