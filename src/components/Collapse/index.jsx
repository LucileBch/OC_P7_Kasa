import { useState } from 'react';
import arrowDown from '../../assets/arrow-down.png';
import arrowUp from '../../assets/arrow-up.png';
import '../../styles/Collapse.css';

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toogle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <article className="collapse">
            <div className="collapse-open" onClick={toogle}>
                <h2 className="collapse-title">{props.title}</h2>
                {isOpen ? (
                    <img src={arrowUp} alt="closing arrow" />
                ) : (
                    <img src={arrowDown} alt="opening arrow" />
                )}
            </div>
            {isOpen && <div>{props.content}</div>}
        </article>
    );
}

export default Collapse;
