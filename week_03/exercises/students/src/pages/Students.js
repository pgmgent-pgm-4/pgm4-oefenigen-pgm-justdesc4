import React, { useEffect, useState } from "react";
import allStudents from "../data/student.js";
import StudentList from "../components/students/StudentList.js";
import StudentSearchForm from "../components/students/StudentSearchForm.js";

export default function Students() {
  const [students, setStudents] = useState(allStudents);
  const [filteredStudents, setFilteredStudents] = useState(allStudents);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    const newStudents = students.filter((student) =>
      student.firstName.includes(inputSearch)
    );
    setFilteredStudents(newStudents);
  }, [inputSearch]);

  return (
    <div>
      <StudentSearchForm
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
      />
      <StudentList students={filteredStudents} />
    </div>
  );
}
