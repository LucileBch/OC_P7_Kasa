/***     ABOUT PAGE     ***/

/* Importing useEffect, Header, Banner, Collapse and Footer components, asset and style */
import { useEffect } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import bannerAbout from '../assets/banner-about.png';
import '../styles/About.css';

/* About function to display the page */
/* Props to pass datas in Banner and Collapse children components */
function About() {
    useEffect(() => {
        document.title = 'About';
    }, []);

    return (
        <div>
            <Header />
            <main>
                <Banner imagebanner={bannerAbout} title="" page="about" />
                <section className="collapse-container">
                    <Collapse
                        page="about"
                        title="Fiabilité"
                        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                    />
                    <Collapse
                        page="about"
                        title="Respect"
                        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    />
                    <Collapse
                        page="about"
                        title="Service"
                        content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                    />
                    <Collapse
                        page="about"
                        title="Sécurité"
                        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
}

/* Exporting About page */
export default About;
