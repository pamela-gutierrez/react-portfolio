import React from "react";
// import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./index.css"
import Home from "./pages/Home"
import AboutMe from "./pages/About"
import Projects from "./pages/Projects"


function App() {
    return (
        <div>
            <Router>
                {/* <Router basename="/"> */}
                <div>
                    <Route exact path={["/", "/react-portfolio"]} component={Home} />
                    {/* <Route exact path="/react-portfolio" component={Home} /> */}
                    <Route exact path="/about" component={AboutMe} />
                    <Route exact path="/projects" component={Projects} />
                </div>
            </Router>
        </div>
    )
}

export default App;

