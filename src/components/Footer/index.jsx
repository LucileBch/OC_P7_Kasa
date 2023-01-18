import '../../styles/Footer.css';
import logo from '../../assets/footer-logo.svg';

function Footer() {
    return (
        <footer className="kasa-footer">
            <img src={logo} alt="logo Kasa" className="kasa-footer-logo"></img>
            <p className="kasa-footer-rights">
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    );
}

export default Footer;
