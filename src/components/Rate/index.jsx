/***     RATE COMPONENT     ***/

/* Importing assets */
import fullStar from '../../assets/full-star.png';
import emptyStar from '../../assets/empty-star.png';

/* Rate function using prop stars */
/* Using range.map to compare each number with the number of stars and display full and/or empty stars*/
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

/* Exporting Rate component */
export default Rate;
