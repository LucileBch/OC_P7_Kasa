/*     BANNER COMPONENT     */

import '../../styles/Banner.css';

/* Function banner using props imagebanner and title */
function Banner({ imagebanner, title }) {
    return (
        <section className="banner">
            <img src={imagebanner} alt="landscape" className="banner-picture" />
            <h2 className="banner-title">{title}</h2>
        </section>
    );
}

/* Exporting function Banner */
export default Banner;
