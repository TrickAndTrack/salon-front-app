import React from 'react'
import "./Navbar.css";

import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent ">
                <div className="container-fluid" >
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/HairSservice">HAIR SERVICE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link border border-warning" to="/booknow">Book Now</Link>
                            </li>

                        </ul>

                    </div>
                </div>

            </nav>
            <Outlet />
        </>

    )
};

export default Layout;
