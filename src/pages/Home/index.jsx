import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import Footer from '../../components/Footer';

function Home() {
    return (
        <div>
            <Header />
            <main>
                <Banner path="home" />;
                <Gallery />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
