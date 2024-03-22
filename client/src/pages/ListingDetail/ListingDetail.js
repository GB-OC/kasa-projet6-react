import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import "./ListingDetail.css";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import PropertyTitle from "../../components/PropertyTitle/PropertyTitle";
import OwnerName from "../../components/OwnerName/OwnerName";
import PropertyTags from "../../components/PropertyTags/PropertyTags";
import StarRating from "../../components/StarRating/StarRating";
import CollapsibleDescription from "../../components/CollapsibleDescription/CollapsibleDescription";
import CollapsibleAmenities from "../../components/CollapsibleAmenities/CollapsibleAmenities";

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
      <div className="listing-detail-bottom">
        <CollapsibleDescription description={apartment.description} />
        <CollapsibleAmenities equipments={apartment.equipments} />
      </div>
    </div>
  );
}


export default ListingDetail;
