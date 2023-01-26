import fullStar from '../../assets/full-star.png';
import emptyStar from '../../assets/empty-star.png';

function Rate({ stars }) {
    const range = [1, 2, 3, 4, 5];

    return (
        <div>
            {range.map((rangeElem, star) =>
                stars >= rangeElem ? (
                    <img src={fullStar} alt="pink star" key={star} />
                ) : (
                    <img src={emptyStar} alt="grey star" key={star} />
                )
            )}
        </div>
    );
}

export default Rate;
