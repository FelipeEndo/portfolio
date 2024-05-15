import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Project = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState({ techs: "", description: "" });

  useEffect(() => {
    const url = `/api/v1/show/${params.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setProject(response))
      .catch(() => navigate("/projects"));
  }, [params.id]);

  const addHtmlEntities = (str) => {
    return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  };

  const techList = () => {
      let techList = "No technologies available";

      if (project.techs.length > 0) {
        techList = project.techs
          .map((tech, index) => (
            <li key={index} className="list-group-item">
              {tech.name}
            </li>
          ));
      }

      return techList;
    };

    const projectDescription = addHtmlEntities(project.description);
    
    return (
      <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src={project.image}
            alt={`${project.name} image`}
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {project.name}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <ul className="list-group">
                <h5 className="mb-2">Techs</h5>
                {techList()}
              </ul>
            </div>
            <div className="col-sm-12 col-lg-7">
              <h5 className="mb-2">Description</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${projectDescription}`,
                }}
              />
            </div>
            <div className="col-sm-12 col-lg-2">
              <button
                type="button"
                className="btn btn-danger"
              >
                Delete App
              </button>
            </div>
          </div>
          <Link to="/projects" className="btn btn-link">
            Back to projects
          </Link>
        </div>
      </div>
    );
};

export default Project;
