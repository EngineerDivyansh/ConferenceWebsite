import React from "react";
import styles from "../styles/ImportantDates.module.css";

const ImportantDates = () => {
  return (
    <div className={styles["important-dates-container"]}>
      <h1 className={styles["important-dates-heading"]}>Important Dates</h1>
      <table className={styles["date-table"]}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Registration opening:</td>
            <td className={styles["date-value"]}>15th May 2024</td>
          </tr>
          <tr>
            <td>Abstract Submission deadline:</td>
            <td className={styles["date-value"]}>15th Aug 2024</td>
          </tr>
          <tr>
            <td>Acceptance and Notification:</td>
            <td className={styles["date-value"]}>15th Oct 2024</td>
          </tr>
          <tr>
            <td>Early Bird Registration:</td>
            <td className={styles["date-value"]}>15th Aug 2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ImportantDates;
