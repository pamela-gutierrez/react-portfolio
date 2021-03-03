import React from "react";


function Project(props) {
    return (
        <div>
            <div className="grid-x grid-margin-x small-up-2 medium-up-3">
                <div className="cell">
                    <div className="card">
                        <img className="cardPics" src={props.image} />
                        <div className="card-section">
                            <h4>{props.name}</h4>
                            <p>{props.description}</p>
                            <a target="_blank" href={props.github}> GitHub Link</a>
                            <br />
                            <a target="_blank" href={props.deployed}>Deployed Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;