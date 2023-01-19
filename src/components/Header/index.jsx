import { NavLink } from 'react-router-dom';
import '../../styles/Header.css';
import logo from '../../assets/header-logo.svg';

function Header() {
    return (
        <header className="kasa-header">
            <img src={logo} alt="logo Kasa" className="kasa-header-logo"></img>
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

export default Header;
