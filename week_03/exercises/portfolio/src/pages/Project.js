import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Project() {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);
  const project = projects.find((project) => project.id === Number(id));

  return (
    <div>
      {project ? (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
