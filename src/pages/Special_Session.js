import React from "react";
import styles from "../styles/SpecialSessions.module.css"; // Import CSS module

function Special_Session() {
  return (
    <div className={styles["special-sessions-container"]}>
      {" "}
      {/* Apply special-sessions-container class from the CSS module */}
      <h2>Special Sessions</h2>
      <div className={styles.session}>
        {" "}
        {/* Apply session class from the CSS module */}
        <h3>
          SS01: eXplainable Artificial Intelligence (XAI) for Cyber-Physical
          Systems
        </h3>
        <p>
          <strong>Organizers:</strong>
        </p>
        <ul>
          <li>
            Dr. Ramanujam E., Assistant Professor, Department of Computer
            Science and Engineering, National Institute of Technology Silchar,
            Assam, India - 788010
          </li>
          <li>
            Dr. Abirami A M., Associate Professor, Department of Information
            Technology, Thiagarajar College of Engineering, Madurai, Tamil Nadu,
            India - 625015
          </li>
        </ul>
      </div>
      <div className={styles.session}>
        {" "}
        {/* Apply session class from the CSS module */}
        <h3>
          SS02: Smart Technologies for Sustainable Energy, Environment and
          Transportation System
        </h3>
        <p>
          <strong>Organizers:</strong>
        </p>
        <ul>
          <li>
            Dr. Shailendra Singh, Department of Electrical Engineering, National
            Institute of Technology Agartala, Tripura
          </li>
          <li>
            Dr. Sadhan Gope, Department of Electrical Engineering, National
            Institute of Technology Agartala, Tripura
          </li>
          <li>
            Dr. Padmagirisan P., Department of Electrical Engineering, National
            Institute of Technology Agartala, Tripura
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Special_Session;
