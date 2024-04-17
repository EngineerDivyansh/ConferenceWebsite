import React from "react";
import styles from "../styles/LayoutStyles.module.css"; // Import CSS module
import BackgroundVideo from "./BackGroundVideo";
const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      {" "}
      {/* Apply layout class from the CSS module */}
      <header className={styles.header}></header>
      {/* <Sidebar /> */}
      <div>{children}</div>
      <footer className={styles.footer}>
        {" "}
        {/* Apply footer class from the CSS module */}
        <p>
          Copyright © MNNIT Allahabad. All rights reserved. <br />
          Best viewed in Firefox 3.6 & Internet Explorer 6.0 onwards. <br />
          Developed and Managed by Jitendra Kumar and Divyansh Patel
        </p>
      </footer>
    </div>
  );
};

export default Layout;
