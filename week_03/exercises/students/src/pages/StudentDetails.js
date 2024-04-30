import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import allStudents from "../data/student.js";
import Student from "../components/students/Student.js";

export default function StudentDetails() {
  const { studentId } = useParams();
  const [student, setStudent] = useState(null);
  useEffect(() => {
    const newStudent = allStudents.find((student) => student.id === studentId);
    setStudent(newStudent);
  }, [studentId]);

  return (
    <div>
      StudentDetails: {studentId}
      {student && <Student student={student} />}
    </div>
  );
}
