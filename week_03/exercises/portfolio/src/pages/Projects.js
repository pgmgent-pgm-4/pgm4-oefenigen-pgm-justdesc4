import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={`project-${project.id}`}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
}
