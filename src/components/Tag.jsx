/***     TAG COMPONENT     ***/

/* Importing style */
import '../styles/Tag.css';

/* Tag function using tags prop */
/* Using .maps to display a list of tags */
function Tag({ tags }) {
    return (
        <ul className="tag-list">
            {tags.map((tag) => (
                <li key={tag} className="tag-element">
                    {tag}
                </li>
            ))}
        </ul>
    );
}

/* Exporting Tag component */
export default Tag;
