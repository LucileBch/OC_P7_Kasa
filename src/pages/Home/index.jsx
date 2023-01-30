/***     HOME PAGE     ***/

/* Importing Header, Banner, Card and Footer components, and asset */
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import bannerHome from '../../assets/banner-home.png';

/* Home function to display the page */
/* Props to pass datas in Banner child component */
function Home() {
    return (
        <div>
            <Header />
            <main>
                <Banner
                    imagebanner={bannerHome}
                    title="Chez vous, partout et ailleurs"
                />
                <Card />
            </main>
            <Footer />
        </div>
    );
}

/* Exporting Home page */
export default Home;
