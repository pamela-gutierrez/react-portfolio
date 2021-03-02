import React from "react";
import Project from "../components/Project";
import NavBar from "../components/NavBar";

function Projects() {
    return (
        <div>
            <NavBar />
            <div className="grid-container">
                <Project />
            </div>
        </div>
    )
}

export default Projects;