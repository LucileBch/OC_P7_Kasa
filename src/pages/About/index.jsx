import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import Footer from '../../components/Footer';

function About() {
    return (
        <body>
            <Header />
            <main>
                <Banner path="about" />;
                <Collapse path="about" />
            </main>
            <Footer />
        </body>
    );
}

export default About;
