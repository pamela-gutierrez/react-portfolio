import React from "react";
import "../style.css"

function HoverReavealBtn() {
    <div>
        <div className="button-hover-reveal-wrapper hide-for-small-only">
            <label>Learn More</label>
            <a href="assets/Pamela_Gutierrez_-_Web_Developer (2).pdf" target="_blank"
                className="button-hover-reveal">Resume</a>
            <a data-open="about_modal" className="button-hover-reveal">
                About Me</a>
            <a data-open="projects_modal" className="button-hover-reveal">Projects</a>
        </div>
        <div className="icons hide-for-small-only" style="margin-top:100px;">
            <a href="https://github.com/pamela-gutierrez" target="_blank" className="button-hover-reveal"><i
                className="fab fa-github fa-3x"></i></a>
            <a href="mailto:pgutierrez44@gmail.com" target="_blank" className="button-hover-reveal"><i
                className="far fa-envelope fa-3x"></i></a>
            <a href="https://www.linkedin.com/in/pamela-gutierrez" target="_blank" className="button-hover-reveal">
                <i className="fab fa-linkedin fa-3x"></i></a>
        </div>
        {/* // <!--SHOW FOR SMALL SCREEN ONLY-- > */}
        <div className="grid-x show-for-small-only" style="margin-bottom:10px;">
            <div className="cell" style="margin-bottom: 70px;">
                <div className="button-hover-reveal-wrapper show-for-small-only">
                    <label>Resume</label>
                    {/* <!-- RESUME BUTTON --> */}
                    <a href="assets/Pamela_Gutierrez_-_Web_Developer (2).pdf" target="_blank"
                        className="button-hover-reveal">Resume</a>
                </div>
            </div>
            <div className="cell" style="margin-bottom: 70px;">
                <div className="button-hover-reveal-wrapper show-for-small-only">
                    <label>About Me</label>
                    <a data-open="about_modal" className="button-hover-reveal">
                        About Me</a>
                </div>
            </div>
            <div className="cell" style="margin-bottom:70px;">
                <div className="button-hover-reveal-wrapper show-for-small-only">
                    <label>Projects</label>
                    <a data-open="projects_modal" className="button-hover-reveal">Projects</a>
                </div>
            </div>
            <div>
                <a href="https://github.com/pamela-gutierrez" target="_blank" className="button-hover-reveal"><i
                    className="fab fa-github fa-3x"></i></a>
                <a href="mailto:pgutierrez44@gmail.com" target="_blank" className="button-hover-reveal"><i
                    className="far fa-envelope fa-3x"></i></a>
                <a href="https://www.linkedin.com/in/pamela-gutierrez" target="_blank" className="button-hover-reveal">
                    <i className="fab fa-linkedin fa-3x"></i></a>
            </div>
        </div>
    </div>




}