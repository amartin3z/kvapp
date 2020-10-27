import React from "react";
import { 
    // Link, 
    NavLink
} from "react-router-dom";


export const NavBar = () => {
    return (
        <nav 
            className="navbar" 
            role="navigation" 
            aria-label="main navigation"
        >
            <div 
                className="navbar-brand"
            >
                <NavLink 
                    className="navbar-item" 
                    to="/"
                >
                    <img 
                        src="https://bulma.io/images/bulma-logo.png" 
                        width="112" 
                        height="28"
                        alt="logo"
                    />
                </NavLink>

                <a 
                    role="button" 
                    className="navbar-burger burger" 
                    aria-label="menu" 
                    aria-expanded="false" 
                    data-target="navbarBasicExample"
                    href="/#"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div 
                id="navbarBasicExample" 
                className="navbar-menu"
            >
                <div 
                    className="navbar-start"
                >
                    <NavLink 
                        activeClassName="active"
                        className="navbar-item"
                        exact
                        to="/a"
                    >
                        A
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="navbar-item"
                        exact
                        to="/b"
                    >
                        B
                    </NavLink>

                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a 
                                className="button is-light"
                                href="/#"
                            >
                                Log out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}