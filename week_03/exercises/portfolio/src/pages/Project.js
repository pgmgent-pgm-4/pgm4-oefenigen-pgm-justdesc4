import React, { useState, useEffect, useParams } from "react";

export default function Project() {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);
  const project = projects.find((project) => project.id === id);

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}
