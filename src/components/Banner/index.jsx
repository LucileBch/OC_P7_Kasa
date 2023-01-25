import '../../styles/Banner.css';

function Banner({ imagebanner, title }) {
    return (
        <section className="banner">
            <img src={imagebanner} alt="landscape" className="banner-picture" />
            <h2 className="banner-title">{title}</h2>
        </section>
    );
}

export default Banner;
