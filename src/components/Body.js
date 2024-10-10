import React, {useState} from 'react';
import resList from '../utils/mockData'
import RestaurantCard from './RestaurantCard'

import { CiSearch } from "react-icons/ci";

const Body = ()=>{
    const[restaurantList,setRestaurantList] = useState(resList)
    const[showButton,setShowButton] = useState(true)
    const topRatedRestaurants = ()=>{
        const topRated = restaurantList.filter((res)=>res.info.avgRating > 4)
        setRestaurantList(topRated)
        setShowButton(false)
    }
    return(
        <div className='flex flex-col gap-8 justify-between items-center mt-3'>

            <div className='flex justify-between items-center'>
                <div className='flex border border-black'>
                    <input type="text"  className='w-50 h-auto' placeholder='search'/>   
                    <CiSearch/> 
                </div>
                
                {showButton &&
                <div className='border border-black ml-12'>
                    <button className=' bg-orange-400 p-2 border border-black' onClick = {topRatedRestaurants}>Top Restaurants</button>
                </div>
                }       
            </div>

            <div className='flex flex-wrap'>
                {restaurantList.map((restaurant)=>(
                    <RestaurantCard key = {restaurant.info.id} restaurantData={restaurant}/>        
                ))}
            </div>

        </div>
    )
}
export default Body;