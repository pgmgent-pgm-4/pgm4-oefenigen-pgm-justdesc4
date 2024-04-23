import React from "react";
import styles from "./teammember.module.css";

export default function TeamMember({ members }) {
  return (
    <div className={styles.card}>
      {members.map((member, index) => (
        <div key={index}>
          <figure>
            <img src={member.image} alt={member.firstName} />
          </figure>
          <h2>
            {member.firstName} {member.lastName}
          </h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
}
