import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Logement from './pages/Logement';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            LOGO KASA
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement" element={<Logement />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
