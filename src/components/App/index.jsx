import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Logement from '../../pages/Logement';
import About from '../../pages/About';
import Header from '../Header';
import Footer from '../Footer';
import Error from '../../pages/Error';

function App() {
    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/logement/:id" element={<Logement />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;