import "./PropertyTitle.sass";

const PropertyTitle = ({ title, location }) => {
    const [city, department] = location.split(' - ');
    return (
        <div className="property-title">
            <h1>{title}</h1>
            <h2>{department}, {city}</h2>
        </div>
    );
};

export default PropertyTitle;