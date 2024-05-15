import React from "react";
import AboutPhotoCard from "./AboutPhotoCard";
import AboutDescriptionCard from "./AboutDescriptionCard";
import { Link } from "react-router-dom";

export default function About() {
  return (
  <div>
    <h1> About </h1>
    <div className="justify-content-center mt-5" style={{ display: 'flex' }}>
      <AboutPhotoCard />
      <AboutDescriptionCard />
    </div>
  </div>
  );
}


