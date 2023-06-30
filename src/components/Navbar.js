import React from 'react'
import "./Navbar.css";
import images from "../images/Logo.png";

export default function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg bg-transparent ">
            <div className="container-fluid" >
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a className="nav-link" href="!#">
                                <img src={images} alt="img_loading" height="72" />
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="!#">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="!#">HAIR SERVICE</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle " href="!#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                SHOP
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item " href="!#">MEN 0R BOY</a></li>
                                <li><a className="dropdown-item " href="!#">WOMEN OR GIRLE</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">

                            <a className="nav-link border border-warning" href="!#">BOOK NOW</a>


                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}
