import React from "react";
import Resume from "./pam-resume.pdf";
import "./index.css"
import { Link } from "react-router-dom";

function Hero() {
    return (

        <div className="hero-image">
            <div className="hero-text">
                <h1>Pamela Gutierrez</h1>
                <h2><small>Web Developer | Travel Lover</small></h2>
                <p>(510) 305-0980 &emsp;gtrz.pamela@gmail.com</p>
                <br />
                <div className="button-hover-reveal-wrapper hide-for-small-only">
                    <label>Learn More</label>
                    <a href={Resume} target="_blank" rel="noreferrer"
                        className="button-hover-reveal">Resume</a>

                    <Link to={"/about"}>
                        <a className="button-hover-reveal">About Me</a>
                    </Link>

                    <Link to={"/projects"}>
                        <a className="button-hover-reveal">Projects</a>
                    </Link>

                </div>
                <div className="icons hide-for-small-only" style={{ marginTop: 100 }}>
                    <a href="https://github.com/pamela-gutierrez" target="_blank" rel="noreferrer" className="button-hover-reveal"><i
                        className="fab fa-github fa-3x"></i></a>
                    <a href="mailto:pgutierrez44@gmail.com" target="_blank" rel="noreferrer" className="button-hover-reveal"><i
                        className="far fa-envelope fa-3x"></i></a>
                    <a href="https://www.linkedin.com/in/pamela-gutierrez" target="_blank" rel="noreferrer" className="button-hover-reveal">
                        <i className="fab fa-linkedin fa-3x"></i></a>
                </div>
                {/* // <!--SHOW FOR SMALL SCREEN ONLY-- > */}
                <div className="grid-x show-for-small-only" style={{ marginBottom: 10 }}>
                    <div className="cell" style={{ marginBottom: 70 }}>
                        <div className="button-hover-reveal-wrapper show-for-small-only">
                            <label>Resume</label>
                            {/* <!-- RESUME BUTTON --> */}
                            <a href="assets/Pamela_Gutierrez_-_Web_Developer (2).pdf" target="_blank" rel="noreferrer"
                                className="button-hover-reveal">Resume</a>
                        </div>
                    </div>
                    <div className="cell" style={{ marginBottom: 70 }}>
                        <div className="button-hover-reveal-wrapper show-for-small-only">
                            <label>About Me</label>
                            <a className="button-hover-reveal">
                                About Me</a>
                        </div>
                    </div>
                    <div className="cell" style={{ marginBottom: 70 }}>
                        <div className="button-hover-reveal-wrapper show-for-small-only">
                            <label>Projects</label>
                            <a className="button-hover-reveal">Projects</a>
                        </div>
                    </div>
                    <div>
                        <a href="https://github.com/pamela-gutierrez" target="_blank" rel="noreferrer" className="button-hover-reveal"><i
                            className="fab fa-github fa-3x"></i></a>
                        <a href="mailto:pgutierrez44@gmail.com" target="_blank" rel="noreferrer" className="button-hover-reveal"><i
                            className="far fa-envelope fa-3x"></i></a>
                        <a href="https://www.linkedin.com/in/pamela-gutierrez" target="_blank" rel="noreferrer" className="button-hover-reveal">
                            <i className="fab fa-linkedin fa-3x"></i></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero;
