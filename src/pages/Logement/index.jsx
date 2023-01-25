import { useParams } from 'react-router-dom';

function Logement() {
    const { id } = useParams();
    return (
        <div>
            <h1>Fiche logement {id} </h1>
        </div>
    );
}

export default Logement;
