/***     BANNER COMPONENT     ***/

/* Importing Banner style */
import '../styles/Banner.css';

/* Function banner using props imagebanner, title and page */
function Banner({ imagebanner, title, page }) {
    const bannerPicture =
        page === 'about' ? 'banner-picture_about' : 'banner-picture_home';

    return (
        <section className="banner">
            <img src={imagebanner} alt="landscape" className={bannerPicture} />
            <h1>{title}</h1>
        </section>
    );
}

/* Exporting function Banner */
export default Banner;
