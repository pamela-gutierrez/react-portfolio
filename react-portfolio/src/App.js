import React from "react";
// import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./index.css"
import Home from "./pages/Home"
import AboutMe from "./pages/About"


function App() {
    return (
        <div>
            <Router>
                {/* <Router basename="/"> */}
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/About" component={AboutMe} />
                    {/* <Route exact path="/Projects" component={Projects} /> */}
                </div>
            </Router>
        </div>
    )
}

export default App;

{/* <Link to={"/projects"}>
    <a>
        <button></button>
    </a>
</Link> */}