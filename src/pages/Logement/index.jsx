import { useParams } from 'react-router-dom';

function Logement() {
    const { idLogement } = useParams(); // à finaliser
    return (
        <div>
            <h1>Fiche logement {idLogement} </h1>
        </div>
    );
}

export default Logement;
