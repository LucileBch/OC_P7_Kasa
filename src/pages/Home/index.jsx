import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import bannerHome from '../../assets/banner-home.png';

function Home() {
    return (
        <div>
            <Header />
            <main>
                <Banner
                    imagebanner={bannerHome}
                    title="Chez vous, partout et ailleurs"
                />
                ;
                <Card />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
