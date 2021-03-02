import React from "react";
import AboutMe from "../components/AboutMe";
import NavBar from "../components/NavBar"

function About() {
    return (
        <div>
            <NavBar />
            <div className="grid-container">
                <AboutMe />
            </div>
        </div>
    )
}

export default About;