import React from "react";
import { Link } from "react-router-dom";
export default function StudentList({ students }) {
  return (
    <div>
      <ul>
        {students.map((student, i) => (
          <li key={i}>
            <Link to={`/${student.id}`}>
              {student.firstName} {student.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
