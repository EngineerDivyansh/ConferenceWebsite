import React from "react";
import styles from "../styles/BackgroundVideo.module.css";
import Layout from "./Layout";

const BackgroundVideo = () => {
  return (
    <div className={styles.container}>
      <video className={styles.video} autoPlay loop muted>
        <source src="../video/back1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <Layout /> */}
    </div>
  );
};

export default BackgroundVideo;
