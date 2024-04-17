import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/OrganizingCommittee.module.css";
function Organizing_Committee() {
  const organizingCommittee = [
    {
      role: "Patron",
      name: "Prof. Rama S. Verma",
      department: "Director",
      college: "MNNIT Allahabad",
    },
    {
      role: "Chairperson",
      name: "Head",
      department: "Department of Biotechnology",
      college: "MNNITA",
    },
    {
      role: "Treasurer",
      name: "Dr. Joybrata Mal",
      department: "Department of Biotechnology",
      college: "MNNIT Allahabad",
    },
  ];

  const organizingSecretaries = [
    {
      name: "Dr. Manisha Sachan",
      department: "Department of Biotechnology",
      college: "MNNIT Allahabad",
    },
    {
      name: "Dr. Seema Nara",
      department: "Department of Biotechnology",
      college: "MNNIT Allahabad",
    },
  ];

  const organizingCoordinators = [
    {
      name: "Dr. Rajitha B.",
      department: "Department of Computer Science and Engineering",
      college: "MNNIT Allahabad",
    },
    {
      name: "Dr. Girijesh Patel",
      department: "Department of Biotechnology",
      college: "MNNIT Allahabad",
    },
    {
      name: "Dr. Nirmal Ch. Roy",
      department: "Department of Electronics and Communication Engineering",
      college: "MNNIT Allahabad",
    },
  ];
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <h1>Organizing Committee</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.table_container}>
          <h2>Organizing Committee</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Role</th>
                <th className={styles.th}>Name</th>
                <th className={styles.th}>College</th>
              </tr>
            </thead>
            <tbody>
              {organizingCommittee.map((member, index) => (
                <tr key={index}>
                  <td className={styles.td}>{member.role}</td>
                  <td className={styles.td}>
                    {member.name} , {member.department}{" "}
                  </td>
                  <td className={styles.td}>{member.college}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.table_container}>
          <h2>Organizing Secretary(s)</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Name</th>
                <th className={styles.th}>Department</th>
                <th className={styles.th}>College</th>
              </tr>
            </thead>
            <tbody>
              {organizingSecretaries.map((member, index) => (
                <tr key={index}>
                  <td className={styles.td}>{member.name}</td>
                  <td className={styles.td}>{member.department}</td>
                  <td className={styles.td}>{member.college}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.table_container}>
          <h2>Organizing Coordinator(s)</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Name</th>
                <th className={styles.th}>Department</th>
                <th className={styles.th}>College</th>
              </tr>
            </thead>
            <tbody>
              {organizingCoordinators.map((member, index) => (
                <tr key={index}>
                  <td className={styles.td}>{member.name}</td>
                  <td className={styles.td}>{member.department}</td>
                  <td className={styles.td}>{member.college}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Organizing_Committee;
