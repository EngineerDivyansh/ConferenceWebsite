import React from "react";
import styles from "../styles/Registration.module.css";

const Registration = () => {
  return (
    <div className={styles.container}>
      <h2>Registration Fees</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Category of Participants</th>
            <th>Early Bird</th>
            <th>Late</th>
            <th>On spot</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Student (UG/PG) (INR)</td>
            <td>2000</td>
            <td>2500</td>
            <td>3000</td>
          </tr>
          <tr>
            <td>PhD/Postdoc/Research Fellow (INR)</td>
            <td>3000</td>
            <td>3500</td>
            <td>4000</td>
          </tr>
          <tr>
            <td>Academia (INR)</td>
            <td>6000</td>
            <td>6500</td>
            <td>7000</td>
          </tr>
          <tr>
            <td>Industries (INR)</td>
            <td>8000</td>
            <td>7000</td>
            <td></td>
          </tr>
          <tr>
            <td>Foreign Delegates (USD)</td>
            <td>200</td>
            <td>250</td>
            <td>300</td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />

      <h2>Bank Account Details</h2>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>Account Name</td>
            <td>SNFCE MNNIT Allahabad</td>
          </tr>
          <tr>
            <td>Account Number</td>
            <td>10424975574</td>
          </tr>
          <tr>
            <td>IFSC Code</td>
            <td>SBIN0002580</td>
          </tr>
          <tr>
            <td>Bank and Branch</td>
            <td>SBI, MNNIT Allahabad</td>
          </tr>
          <tr>
            <td>Swift Code</td>
            <td>SBININBB828</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Registration;
