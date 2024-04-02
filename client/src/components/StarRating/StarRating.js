import filledStar from './star-active1.svg';
import emptyStar from './star-inactive1.svg';
import './StarRating.css';

const StarRating = ({ rating }) => {
  const maxRating = 5;
  const filledStars = Array.from({ length: rating }, (_, i) => i + 1);
  const emptyStars = Array.from({ length: maxRating - rating }, (_, i) => i + 1);

  return (
    <div className="star-rating">
      {filledStars.map((starId) => (
        <img key={starId} src={filledStar} alt="Filled Star" className="filled-star" />
      ))}
      {emptyStars.map((starId) => (
        <img key={starId} src={emptyStar} alt="Empty Star" className="empty-star" />
      ))}
    </div>
  );
};

export default StarRating;
