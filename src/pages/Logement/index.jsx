/***     LOGEMENT PAGE     ***/

/* Importing useParams to get the ad Id in URL and appartList to get the ad infos */
/* Importing Header, Slider, Tag, Rate, Collapse and Footer components and Error page */
import { useParams } from 'react-router-dom';
import { appartList } from '../../datas/appartList';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import Tag from '../../components/Tag';
import Rate from '../../components/Rate';
import Collapse from '../../components/Collapse';
import Footer from '../../components/Footer';
import Error from '../../pages/Error';
import '../../styles/Logement.css';

/* Logement function to display the page */
/* Using .find to check if the id is existing in order to display the Error page if its not the case */
/* Props to pass datas in Slider, Tag, Rate and Collapse children components */
function Logement() {
    const { id } = useParams();
    const appartDisplay = appartList.find((appart) => appart.id === id);

    if (!appartDisplay) return <Error />;

    return (
        <div>
            <Header />
            <Slider slides={appartDisplay.pictures} />
            <section>
                <div className="logement-title">
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

/* Exporting Logement page */
export default Logement;
