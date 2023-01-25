import { useParams } from 'react-router-dom';
import { appartList } from '../../datas/appartList';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Error from '../../pages/Error';

function Logement() {
    const { id } = useParams();
    const appartContent = appartList.find((appart) => appart.id === id);
    if (!appartContent) return <Error />;
    return (
        <div>
            <Header />
            <h1>Fiche logement {id} </h1>
            <Footer />
        </div>
    );
}

export default Logement;
