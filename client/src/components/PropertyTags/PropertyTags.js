import "./PropertyTags.sass";

const PropertyTags = ({ tags }) => {
  return (
    <div className="tags-container">
      {tags.map((tag, index) => (
        <div key={index} className="tag-item">{tag}</div>
      ))}
    </div>
  );
};

export default PropertyTags;