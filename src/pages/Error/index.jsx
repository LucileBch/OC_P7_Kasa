import { Link } from 'react-router-dom';
import '../../styles/Error.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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

export default Error;
