/***     404 ERROR PAGE     ***/

/* Importing Link to navigate and Header and Footer components */
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/Error.css';

/* Error function to display the page */
function Error() {
    return (
        <body>
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
        </body>
    );
}

/* Exporting Error page */
export default Error;
