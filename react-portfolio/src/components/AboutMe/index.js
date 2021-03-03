import React from "react";
import Pic from "./portfolio-pic.jpg";

function AboutMe() {
    return (
        <div className="aboutMe" >
            <h2>About Me</h2>
            <div className="cell">

                <p>
                    <img className="PamPic" style={{ maxBlockSize: 220 }} src={Pic} />
                    My name
                is
                Pamela Gutierrez
                and I
                consider myself a jack of
                many trades! I've recently transitioned into the field of web development and am currently enrolled in the
                UC Berkeley Coding Bootcamp where I'm enjoying new chanllenges and learning to improve my skills each day.
                Prior to this, I worked in the hospitality and tourism industry which took me across the world holding
                different management and leadership positions. I've worked in places as diverse as the Guatemalan jungle and
                the Australian Outback and have found that this quick adaptability has served me well as I transition into a
                new career. I'm excited for what this next step will hold and I hope to merge my many passions in pursuit of
                a rewarding career and eventually the digital nomad life!
                </p>
            </div>
        </div>
    )
}

export default AboutMe;
