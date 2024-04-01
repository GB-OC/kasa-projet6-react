import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import "./ListingDetail.css";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import PropertyTitle from "../../components/PropertyTitle/PropertyTitle";
import OwnerName from "../../components/OwnerName/OwnerName";
import PropertyTags from "../../components/PropertyTags/PropertyTags";
import StarRating from "../../components/StarRating/StarRating";
import Collapsible from "../../components/Collapsible/Collapsible.js";

function ListingDetail() {
  const { id } = useParams();
  const apartment = data.find((apartment) => apartment.id === id);

  return (
    <div className="ListingDetail">
      <ImageSlider id={apartment.id} />
      <div className="listing-detail-top">
        <PropertyTitle title={apartment.title} location={apartment.location} />
        <OwnerName name={apartment.host.name} picture={apartment.host.picture} />
      </div>
      <div className="listing-detail-middle">
        <PropertyTags tags={apartment.tags} />
        <StarRating rating={apartment.rating} />
      </div>
      <div className="collapsible-grid">
        <div className="collapsible-grid-item">
          <Collapsible title="Description" text={apartment.description} />
        </div>
        <div className="collapsible-grid-item">
          <Collapsible title="Amenities" text="This is a filler text for amenities. You can replace it with actual amenities data." />
        </div>
      </div>
    </div>
  );
}

export default ListingDetail;
