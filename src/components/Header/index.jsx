import { Link } from 'react-router-dom';
import '../../styles/Header.css';
import logo from '../../assets/header-logo.svg';

function Header() {
    return (
        <header className="kasa-header">
            <img src={logo} alt="logo Kasa" className="kasa-header-logo"></img>
            <nav>
                <ul className="kasa-header-list">
                    <li>
                        <Link to="/" className="kasa-header-link">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="kasa-header-link">
                            A propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
