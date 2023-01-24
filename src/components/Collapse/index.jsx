import { useState } from 'react';
import { aboutContent } from '../../datas/aboutContent';
import arrowDown from '../../assets/arrow-down.png';
import arrowUp from '../../assets/arrow-up.png';

function Collapse({ id, title, description }) {
    const [isOpen, setIsOpen] = useState(false);
    return isOpen ? (
        <section>
            {aboutContent.map(({ id, title, description }) => (
                <article key={id}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <button onClick={() => setIsOpen(false)}>
                        <img src={arrowUp} alt="flèche de fermeture" />
                    </button>
                </article>
            ))}
        </section>
    ) : (
        <section>
            {aboutContent.map(({ id, title }) => (
                <article key={id}>
                    <h2>{title}</h2>
                    <button onClick={() => setIsOpen(true)}>
                        <img src={arrowDown} alt="flèche d'ouverture" />
                    </button>
                </article>
            ))}
        </section>
    );
}

export default Collapse;
