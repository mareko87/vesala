import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">


                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link" to='/'>Igra</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/kreiraj'>Kreiraj igru</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    )
}
