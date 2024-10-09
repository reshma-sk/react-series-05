import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import resList from '../utils/mockData'
import RestaurantCard from './RestaurantCard'
const Body = ()=>{
    const[restaurantList,setRestaurantList]= useState(resList)
    const[showButton,setShowButton] = useState(true)
    console.log(restaurantList);
    const filterRestaurantList = ()=>{
        const filteredRestaurant = restaurantList.filter(
            (res)=> res.info.avgRating > 4.3    
        )
        setRestaurantList(filteredRestaurant)
        setShowButton(false)
    }
    return(
        <div className='body'>
            <div className='search-box'>
                <input placeholder="search a restaurant you want..." />
            </div>
            <div className='filter'>
                {showButton &&
                 (<button className='filter-btn' onClick={filterRestaurantList}>Top Restaurabts</button>)
                }
                
            </div>
            <div className='restaurant-container'>
                {restaurantList.map((resturant)=>{
                  return(
                    <RestaurantCard key = {resturant.info.id} restaurantData = {resturant}/>

                  )
                })}
            </div>
            
        </div>
    )
}
export default Body;