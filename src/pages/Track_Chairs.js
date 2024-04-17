import React from "react";
import styles from "../styles/TrackChair.module.css"; // Import CSS module

function TrackChair() {
  return (
    <div className={styles["track-chair-container"]}>
      {" "}
      {/* Apply track-chair-container class from the CSS module */}
      <h2>Track Chairs</h2>
      <div className={styles.trackChair}>
        {" "}
        {/* Apply trackChair class from the CSS module */}
        <h3>Track 1: Biomedical Sensors and Devices</h3>
        <p>
          <strong>Chair:</strong> Dr. John Doe
        </p>
        <p>
          <strong>Affiliation:</strong> Department of Biomedical Engineering,
          University of XYZ
        </p>
      </div>
      <div className={styles.trackChair}>
        {" "}
        {/* Apply trackChair class from the CSS module */}
        <h3>Track 2: Wearable Health Monitoring Systems</h3>
        <p>
          <strong>Chair:</strong> Dr. Jane Smith
        </p>
        <p>
          <strong>Affiliation:</strong> Department of Electrical Engineering,
          ABC University
        </p>
      </div>
    </div>
  );
}

export default TrackChair;
