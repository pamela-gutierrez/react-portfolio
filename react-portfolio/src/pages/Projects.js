import React, { useEffect, useState } from "react";
import Project from "../components/Project";
import NavBar from "../components/NavBar";
import AllProjects from "../projects.json";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        loadProjects()
    }, [])

    const loadProjects = () => {
        setProjects(projects)
    }

    return (
        <div>
            <NavBar />

            <div className="grid-container">

                {AllProjects.map((pro) => {
                    return <Project
                        name={pro.name}
                        description={pro.description}
                        image={pro.image}
                        github={pro.github}
                        deployed={pro.deployed}
                    />
                })}
            </div>
        </div>

    )
}

export default Projects;