import './OwnerName.sass';

function OwnerName({ name, picture }) {
  return (
    <div className="owner-card">
      <div className="owner-info">
        <span>{name}</span>
      </div>
      <img src={picture} alt={name} className="owner-picture" />
    </div>
  );
}

export default OwnerName;