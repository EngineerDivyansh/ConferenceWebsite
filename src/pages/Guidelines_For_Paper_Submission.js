import React from "react";
import styles from "../styles/SubmissionGuidelines.module.css";

const SubmissionGuidelines = () => {
  return (
    <div className={styles["submission-guidelines-container"]}>
      <div className={styles["submission-guidelines"]}>
        <h2 className={styles["guideline-heading"]}>
          Guidelines for Abstract and Poster Submission
        </h2>
        <p>
          All participants engaged in original work/projects related to various
          broad areas of the conference are welcome to submit the abstract (250
          words) online through conference website. Participants submitting
          abstract must register themselves for the conference. Participants who
          are only participating in the conference may also register. The
          organizing committee reserves the right for accepting or rejecting the
          abstracts. The abstract will only be included in proceedings if the
          registration fee is received.
        </p>
        <p className={styles["important-points"]}>
          <span className={styles["important-label"]}>Important Points:</span>
          <ul className={styles["bullet-points"]}>
            <li>All participants must register for the conference.</li>
            <li>The abstract submission must be 250 words.</li>
            <li>
              Abstracts will be accepted or rejected by the organizing
              committee.
            </li>
            <li>
              The abstract will only be included in proceedings if the
              registration fee is received.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default SubmissionGuidelines;
