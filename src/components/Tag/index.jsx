/***     TAG COMPONENT     ***/

/* Tag function using tags prop */
/* Using .maps to display a list of tags */
function Tag({ tags }) {
    return (
        <ul>
            {tags.map((tag) => (
                <li key={tag}>{tag}</li>
            ))}
        </ul>
    );
}

/* Exporting Tag component */
export default Tag;
