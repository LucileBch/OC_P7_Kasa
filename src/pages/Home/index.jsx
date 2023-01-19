import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

function Home() {
    return (
        <body>
            <Header />
            <main>
                <Banner path="home" />;
            </main>
            <Footer />
        </body>
    );
}

export default Home;
