import React from "react";
import { CDN_URL } from "../utils/constants";
import { MdStarRate } from "react-icons/md";
const RestaurantCard = ({restaurantData})=>{
    console.log(restaurantData);
    
    const{name,costForTwo,cloudinaryImageId,avgRating} = restaurantData?.info;
    
    return(
        <div className='flex flex-col m-3 border border-yellow-400 w-44'>
            <img src={CDN_URL +cloudinaryImageId } alt="" />
            <h5>{name.slice(0,13)}
                {name.length > 13 ? '...' : ''}
            </h5>
            <h4>{costForTwo}</h4>
            <h4 className='flex'>
                <MdStarRate className="border-6" style={avgRating > 4 ? {backgroundColor:'green'}:{backgroundColor:'red'}}/>
                <span className='ml-1'>{avgRating}</span>
            </h4>
        </div>
    )
}

export default RestaurantCard;