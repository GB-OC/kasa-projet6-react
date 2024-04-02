import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import "./ListingDetail.sass";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import PropertyTitle from "../../components/PropertyTitle/PropertyTitle";
import OwnerName from "../../components/OwnerName/OwnerName";
import PropertyTags from "../../components/PropertyTags/PropertyTags";
import StarRating from "../../components/StarRating/StarRating";
import Collapsible from "../../components/Collapsible/Collapsible.js";

function ListingDetail() {
  const { id } = useParams();
  const apartment = data.find((apartment) => apartment.id === id);

  const equipmentsList = (
    <ul>
      {apartment.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ))}
    </ul>
  );

  return (
    <div className="ListingDetail">
      <ImageSlider id={apartment.id} />
      <div className="listing-detail-top">
        <PropertyTitle title={apartment.title} location={apartment.location} />
        <OwnerName name={apartment.host.name} picture={apartment.host.picture} />
        <PropertyTags tags={apartment.tags} />
        <StarRating rating={apartment.rating} />
        <span className="owner-wrapper">
        <StarRating rating={apartment.rating} className="hidden-rating" />
        <OwnerName name={apartment.host.name} picture={apartment.host.picture} />
        </span>
      </div>
      <div className="collapsible-grid">
        <div className="collapsible-grid-item">
          <Collapsible title="Description" text={apartment.description} />
        </div>
        <div className="collapsible-grid-item">
          <Collapsible title="Équipements" text={equipmentsList} />
        </div>
      </div>
    </div>
  );
}

export default ListingDetail;
