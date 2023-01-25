function Tag({ tags }) {
    return (
        <ul>
            {tags.map((tag) => (
                <li key={tag}>{tag}</li>
            ))}
        </ul>
    );
}

export default Tag;
