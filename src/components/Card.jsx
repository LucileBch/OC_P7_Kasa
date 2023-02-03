/***     CARD COMPONENT     ***/

/* Importing NavLink for the navigation, appartList to get the datas  and style*/
import { NavLink } from 'react-router-dom';
import { appartList } from '../datas/appartList';
import '../styles/Card.css';

/* Card function using props id, title and cover */
/* Using .map to get a new array of appartList with the selected elements */
function Card({ id, title, cover }) {
    return (
        <section className="appart-list">
            {appartList.map(({ id, cover, title }) => (
                <NavLink to={`/logement/${id}`} key={id}>
                    <article key={id} className="appart-card">
                        <img
                            src={cover}
                            alt={`${title} cover`}
                            className="card-img"
                        ></img>
                        <h2 className="card-title">{title}</h2>
                    </article>
                </NavLink>
            ))}
        </section>
    );
}

/* Exporting Card function */
export default Card;
