import React from "react";
// import "./style.css"
import { Link } from "react-router-dom";

function NavBar() {
    return (
        // <nav aria-label="You are here:" role="navigation">
        //     <ul className="breadcrumbs">
        //         <li><a href="#">Home</a></li>
        //         <li><a href="#">Features</a></li>
        //         <li className="disabled">Gene Splicing</li>
        //         <li>
        //             <span className="show-for-sr">Current: </span> Cloning
        //      </li>
        //     </ul>
        // </nav>
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="dropdown menu" data-dropdown-menu>
                    {/* <li className="menu-text">Pamela Gutierrez</li> */}

                    <Link to={"/"}>
                        <li><a>Home</a></li>
                    </Link>

                    <Link to={"/projects"}>
                        <li><a>Projects</a></li>
                    </Link>

                    <Link to={"/about"}>
                        <li><a>About Me</a></li>
                    </Link>

                </ul>
            </div>
        </div>
    )
}

export default NavBar;