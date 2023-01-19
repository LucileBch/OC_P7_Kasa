import '../../styles/Banner.css';

function Banner(props) {
    const path = props.path;
    if (path === 'home') {
        return (
            <section className="banner-home">
                <h2>Chez vous, partout et ailleurs</h2>
            </section>
        );
    } else if (path === 'about') {
        return <section className="banner-about"></section>;
    }
}

export default Banner;
