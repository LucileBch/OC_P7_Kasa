import { useParams } from 'react-router-dom';
import { appartList } from '../../datas/appartList';
import Header from '../../components/Header';
import Tag from '../../components/Tag';
import Rate from '../../components/Rate';
import Footer from '../../components/Footer';
import Error from '../../pages/Error';
import Collapse from '../../components/Collapse';

function Logement() {
    const { id } = useParams();
    const appartDisplay = appartList.find((appart) => appart.id === id);

    if (!appartDisplay) return <Error />;

    return (
        <div>
            <Header />
            <section>
                <div>
                    <h1>{appartDisplay.title} </h1>
                    <p>{appartDisplay.location}</p>
                </div>
                <div>
                    <p>{appartDisplay.host.name}</p>
                    <img src={appartDisplay.host.picture} alt="host profile" />
                </div>
            </section>
            <section>
                <Tag tags={appartDisplay.tags} />
                <Rate stars={appartDisplay.rating} />
            </section>
            <section>
                <Collapse
                    title="Description"
                    content={appartDisplay.description}
                />
                <Collapse
                    title="Équipement"
                    content={
                        <ul>
                            {appartDisplay.equipments.map((equipment) => {
                                return <li key={equipment}>{equipment}</li>;
                            })}
                        </ul>
                    }
                />
            </section>

            <Footer />
        </div>
    );
}

export default Logement;
