import React from "react";
import NavBar from "../NavBar";

function Project() {
    return (
        <div>
            {/* <NavBar /> */}
            {/* <div className="grid-container"> */}
            <div className="grid-x grid-margin-x small-up-2 medium-up-3">
                <div className="cell">
                    <div className="card">
                        <img src="assets/img/generic/rectangle-1.jpg" />
                        <div className="card-section">
                            <h4>This is a row of cards.</h4>
                            <p>This row of cards is embedded in an X-Y Block Grid.</p>
                        </div>
                    </div>
                </div>
                <div className="cell">
                    <div className="card">
                        <img src="assets/img/generic/rectangle-1.jpg" />
                        <div className="card-section">
                            <h4>This is a card.</h4>
                            <p>It has an easy to override visual style, and is appropriately subdued.</p>
                        </div>
                    </div>
                </div>
                <div className="cell">
                    <div className="card">
                        <img src="assets/img/generic/rectangle-1.jpg" />
                        <div className="card-section">
                            <h4>This is a card.</h4>
                            <p>It has an easy to override visual style, and is appropriately subdued.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}

            {/* THIS IS THE SECOND ROW OF CARDS */}
            {/* <div className="grid-x grid-margin-x small-up-2 medium-up-3">
            <div className="cell">
                <div className="card">
                    <img src="assets/img/generic/rectangle-1.jpg" />
                    <div className="card-section">
                        <h4>This is a row of cards.</h4>
                        <p>This row of cards is embedded in an Flex Block Grid.</p>
                    </div>
                </div>
            </div>
            <div className="cell">
                <div className="card">
                    <img src="assets/img/generic/rectangle-1.jpg" />
                    <div className="card-section">
                        <h4>This is a card.</h4>
                        <p>It has an easy to override visual style, and is appropriately subdued.</p>
                    </div>
                </div>
            </div>
            <div className="cell">
                <div className="card">
                    <img src="assets/img/generic/rectangle-1.jpg" />
                    <div className="card-section">
                        <h4>This is a card.</h4>
                        <p>It has an easy to override visual style, and is appropriately subdued.</p>
                    </div>
                </div>
            </div>
        </div> */}
        </div>
    )
}

export default Project;