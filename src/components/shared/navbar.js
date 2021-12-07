import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                <Link className="navbar-brand" to="#">
                    <img src="https://afavor.mx/wp-content/uploads/2021/09/a-favor-logo-1.png" width="100" height="30" className="d-inline-block align-top" alt="logo"/>                
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <form className="form-inline my-2 my-lg-0">
                    <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Kenny Catzin
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="#">Action</Link>
                                <Link className="dropdown-item" to="#">Another action</Link>
                                <Link className="dropdown-item" to="#">Something else here</Link>
                                </div>
                            </li>
                        </ul>
                </form>
                    
                </div>
            </nav>
        </>
    )
}
