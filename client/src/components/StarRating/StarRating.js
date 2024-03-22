import './StarRating.css';

const StarRating = ({ rating }) => {
  const maxRating = 5;
  const filledStars = Array.from({ length: rating }, (_, i) => i + 1);
  const emptyStars = Array.from({ length: maxRating - rating }, (_, i) => i + 1);

  return (
    <div className="star-rating">
      {filledStars.map((starId) => (
        <div key={starId} className="star filled-star" />
      ))}
      {emptyStars.map((starId) => (
        <div key={starId} className="star" />
      ))}
    </div>
  );
};

export default StarRating;
