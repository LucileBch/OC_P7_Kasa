import { useParams } from 'react-router-dom';
import { appartList } from '../../datas/appartList';
import Header from '../../components/Header';
import Tag from '../../components/Tag';
import Footer from '../../components/Footer';
import Error from '../../pages/Error';

function Logement() {
    const { id } = useParams();
    const appartDisplay = appartList.filter((appart) => appart.id === id);

    if (!appartDisplay) return <Error />;

    return (
        <div>
            <Header />
            <section>
                {appartDisplay.map(({ id, tags }) => (
                    <Tag key={id} tags={tags} />
                ))}
            </section>
            <h1>Fiche logement {id} </h1>
            <Footer />
        </div>
    );
}

export default Logement;
