import { Link } from 'react-router-dom';
import '../../styles/Error.css';

function Error() {
    return (
        <div className="error-container">
            <h1 className="error-404"> 404 </h1>
            <h2 className="error-msg">
                Oups la page que vous demandez n'existe pas.
            </h2>
            <Link to="/" className="error-link">
                Retourner sur la page d'accueil
            </Link>
        </div>
    );
}

export default Error;
