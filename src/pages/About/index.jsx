import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import Footer from '../../components/Footer';
import bannerAbout from '../../assets/banner-about.png';

function About() {
    return (
        <div>
            <Header />
            <main>
                <Banner imagebanner={bannerAbout} title="" />;
                <Collapse path="about" />
            </main>
            <Footer />
        </div>
    );
}

export default About;
