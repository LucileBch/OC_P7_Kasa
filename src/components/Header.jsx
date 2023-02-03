/***     HEADER COMPONENT     ***/

/* Importing NavLink to navigate, asset and style */
import { NavLink } from 'react-router-dom';
import logo from '../assets/header-logo.svg';
import '../styles/Header.css';

/* Header function */
function Header() {
    return (
        <header className="kasa-header">
            <NavLink to="/">
                <img
                    src={logo}
                    alt="logo Kasa"
                    className="kasa-header-logo"
                ></img>
            </NavLink>
            <nav>
                <ul className="kasa-header-list">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? 'kasa-link-active'
                                    : 'kasa-link-inactive'
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? 'kasa-link-active'
                                    : 'kasa-link-inactive'
                            }
                        >
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

/* Exporting Header component */
export default Header;
