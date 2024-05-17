import React from "react";
import AboutPhotoCard from "./AboutPhotoCard";
import AboutDescriptionCard from "./AboutDescriptionCard";
import { Link } from "react-router-dom";

export default function About() {
  return (
  <div className="mt-5 mb-4 flex justify-content-center">
    <div>
      <AboutPhotoCard />
    </div>
    <div>
      <AboutDescriptionCard />
    </div>
  </div>
  );
}


