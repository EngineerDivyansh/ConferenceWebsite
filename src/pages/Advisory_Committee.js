import React from "react";
import  styles from "../styles/AdvisoryCommittee.module.css"; // Import your CSS file
import Layout from "../components/Layout";

const AdvisoryCommittee = () => {
  const advisoryMembers = [
    { name: "Prof. K. Thangraj", college: "Director, CDFD Hyderabad, India" },
    {
      name: "Prof. Harpal Singh",
      college: "Scientist Emeritus, IIT Delhi, India",
    },
    {
      name: "Dr. Sandeep Vashist",
      college: "Senior Global IVD Product Director, Fapon Biotech Inc. Germany",
    },
    { name: "Prof. Sudha Sharma", college: "Harvard University, USA" },
    {
      name: "Dr. Arindam Chakraborty",
      college: "Deputy General Manager, Enzene Biosciences, Pune, India",
    },
    { name: "Prof P. Hemachandra Reddy", college: "TTUHSC, TX, USA" },
    { name: "Dr. Ajay P. Singh", college: "USA-MCI, AL, USA" },
    { name: "Prof. Siddhartha S Ghosh", college: "IIT Guwahati, India" },
    { name: "Prof. Mukesh Kumar Pathak", college: "IIT Roorkee, India" },
    { name: "Prof. Cathal Gurrin", college: "Dublin City University, Ireland" },
  ];

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <h1>Advisory Committee</h1>
      </header>
      <main>
        <table className={styles.table}>
          <thead >
            <tr className={styles.tr}>
              <th className={styles.th} >Name</th>
              <th className={styles.th}>College</th>
            </tr>
          </thead>
          <tbody>
            {advisoryMembers.map((member, index) => (
              <tr key={index} className={styles.tr}>
                <td className={styles.td}>{member.name}</td>
                <td className={styles.td}>{member.college}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default AdvisoryCommittee;
