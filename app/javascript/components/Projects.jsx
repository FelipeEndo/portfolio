import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const url = "/api/v1/projects/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setProjects(res))
      .catch(() => navigate("/"));
  }, []);

  const allProjects = projects.map((project, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            src={project.image}
            className="card-img-top"
            alt={`${project.name} image`}
          />
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <Link to={`/project/${project.id}`} className="btn custom-button">
              View Project
            </Link>
          </div>
        </div>
      </div>
    ));
    const noProject = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No projects yet. Why not <Link to="/new_project">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Apps for every occasion</h1>
            <p className="lead text-muted">
              We’ve pulled together our most popular apps, our latest
              additions, and our editor’s picks, so there’s sure to be something
              tempting for you to try.
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-end mb-3">
              <Link to="/recipe" className="btn custom-button">
                Create New App
              </Link>
            </div>
            <div className="row">
              {projects.length > 0 ? allProjects : noProject}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
};

export default Projects;
