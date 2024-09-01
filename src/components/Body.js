import RestaturantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../../utils/mockData";


const Body = () => {
    let [RestaurantData, SetRestaurantData] = useState(resList)
    return (

        <div className="body">
            <div className="search">
                <button class="filter-btn" onClick={() => {
                    const filteredData = RestaurantData.filter((res) => res.info.avgRating > 4.5)
                    SetRestaurantData(filteredData)
                }}> Filter best Rating</button>
            </div>
            <div className="restaurant-container">
                {
                    RestaurantData.map((restaurant) => {
                        return <RestaturantCard key={restaurant.info.id} resData={restaurant} />
                    })
                }
            </div>
        </div>
    )
}

export default Body;

