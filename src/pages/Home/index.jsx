import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

function Home() {
    return (
        <div>
            <Header />
            <main>
                <Banner path="home" />;
                <Card />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
