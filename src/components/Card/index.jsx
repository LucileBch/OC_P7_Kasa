import '../../datas/appartList';

function Card({ id, title, cover }) {
    return (
        <article className>
            <img src={cover} alt={`${title} cover`}></img>
            <h3>{title}</h3>
        </article>
    );
}

export default Card;
