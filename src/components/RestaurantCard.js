import React from "react";

import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props)=>{
    const{restaurantData} = props;
    console.log(restaurantData);
    const{ cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    } = restaurantData?.info;
    return(
        <div className="restaurant-card">
            <img src={CDN_URL + cloudinaryImageId} alt="" className="restaurant-logo" />
            <div className="restaurant-details">
                <h3 className="restaurant-name">{name.slice(0,20)}</h3>
                <div className="esa-rating">
                    <h4 className="rating">
                        <span>{avgRating}*</span>
                    </h4>
                    <h4>{costForTwo}</h4>
                    <h4>{deliveryTime} mins</h4>
                </div>
                <p className="cuisine">
                    {cuisines.join(', ')}
                </p>
                <p className="location">{areaName}</p>
            </div>
            
        </div>
    )
}
export default RestaurantCard;