import { appartList } from '../../datas/appartList';
import Card from '../Card';
import '../../styles/Gallery.css';

function Gallery() {
    return (
        <section className="home-gallery">
            {appartList.map(({ id, cover, title }) => (
                <Card cover={cover} title={title} />
            ))}
        </section>
    );
}

export default Gallery;
