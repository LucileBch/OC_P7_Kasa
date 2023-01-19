import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

function About() {
    return (
        <body>
            <Header />
            <main>
                <Banner path="about" />;
            </main>
            <Footer />
        </body>
    );
}

export default About;
