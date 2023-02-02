/***     COLLAPSE COMPONENT     ***/

/* Importing useState Hook and assets */
import { useState } from 'react';
import arrowDown from '../../assets/arrow-down.png';
import arrowUp from '../../assets/arrow-up.png';
import '../../styles/Collapse.css';

/* Collapse function  using props title and content */
/* Hook useState to manage isOpen state */
/* Handler onClick to open or close the component */
/* Ternary operator to indicate which infos to display according to the state */
function Collapse({ title, content, page }) {
    const [isOpen, setIsOpen] = useState(false);
    const button = () => {
        setIsOpen(!isOpen);
    };
    const banner =
        page === 'about' ? 'collapse-banner_about' : 'collapse-banner_appart';
    const titleStyle =
        page === 'about' ? 'collapse-title_about' : 'collapse-title_appart';
    const contentStyle =
        page === 'about' ? 'collapse-content_about' : 'collapse-content_appart';

    return (
        <article>
            <div className={banner} onClick={button}>
                <h2 className={titleStyle}>{title}</h2>
                {isOpen ? (
                    <img
                        src={arrowUp}
                        alt="closing arrow"
                        className="collapse-arrow"
                    />
                ) : (
                    <img
                        src={arrowDown}
                        alt="opening arrow"
                        className="collapse-arrow"
                    />
                )}
            </div>
            {isOpen && <p className={contentStyle}>{content}</p>}
        </article>
    );
}

/* Exporting Collapse function */
export default Collapse;
