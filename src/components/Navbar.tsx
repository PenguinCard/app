import * as React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Offcanvas navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end bg-dark" id="offcanvasNavbar"
                     aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"/>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="link ">Link</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="offcanvasNavbarDropdown"
                                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu bg-dark" aria-labelledby="offcanvasNavbarDropdown">
                                    <li><Link to="dropdown/action" className="dropdown-item text-white">Action</Link></li>
                                    <li><Link to="dropdown/anohteraction" className="dropdown-item text-white">Another action</Link></li>
                                    <li>
                                        <hr className="dropdown-divider bg-white"/>
                                    </li>
                                    <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
