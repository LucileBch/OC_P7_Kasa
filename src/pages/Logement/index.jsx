import { useParams } from 'react-router-dom';
import { appartList } from '../../datas/appartList';
import Header from '../../components/Header';
import Tag from '../../components/Tag';
import Footer from '../../components/Footer';
import Error from '../../pages/Error';

function Logement() {
    const { id } = useParams();
    const appartDisplay = appartList.find((appart) => appart.id === id);

    if (!appartDisplay) return <Error />;

    return (
        <div>
            <Header />
            <section>
                <h1>Fiche logement {id} </h1>
                <Tag tags={appartDisplay.tags} />
            </section>

            <Footer />
        </div>
    );
}

export default Logement;
