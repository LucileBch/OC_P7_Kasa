/***     FOOTER COMPONENT     ***/

/* Importing assets and style */
import { NavLink } from 'react-router-dom';
import '../styles/Footer.css';
import logo from '../assets/footer-logo.svg';

/* Footer function */
function Footer() {
    return (
        <footer className="kasa-footer">
            <NavLink to="/">
                <img
                    src={logo}
                    alt="logo Kasa"
                    className="kasa-footer-logo"
                ></img>
            </NavLink>
            <p className="kasa-footer-rights">
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    );
}

/* Exporting Footer component */
export default Footer;
