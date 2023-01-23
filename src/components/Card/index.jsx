import { appartList } from '../../datas/appartList';
import '../../styles/Card.css';

function Card({ id, title, cover }) {
    return (
        <section className="appart-list">
            {appartList.map(({ id, cover, title }) => (
                <article key={id} className="appart-card">
                    <img
                        src={cover}
                        alt={`${title} cover`}
                        className="card-img"
                    ></img>
                    <h3 className="card-title">{title}</h3>
                </article>
            ))}
        </section>
    );
}

export default Card;
