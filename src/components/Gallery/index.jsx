import { appartList } from '../../datas/appartList';
import Card from '../Card';

function Gallery() {
    return (
        <section>
            {' '}
            {/*style section grise + grid ?*/}
            <ul>
                {appartList.map(({ id, cover, title }) => (
                    <li key={id}>
                        <Card cover={cover} title={title} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Gallery;
