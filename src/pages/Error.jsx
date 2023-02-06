/***     404 ERROR PAGE     ***/

/* Importing useEffect, Link to navigate, Header and Footer components and style */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Error.css';

/* Error function to display the page */
function Error() {
    useEffect(() => {
        document.title = 'Page not found';
    }, []);

    return (
        <div>
            <Header />
            <main>
                <section className="error-container">
                    <h1 className="error-404"> 404 </h1>
                    <h2 className="error-msg">
                        Oups la page que vous demandez n'existe pas.
                    </h2>
                    <Link to="/" className="error-link">
                        Retourner sur la page d'accueil
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    );
}

/* Exporting Error page */
export default Error;
