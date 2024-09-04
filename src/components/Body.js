import RestaturantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../../utils/mockData";
import Shimmer from "./Shimmers";


const Body = () => {
    let [RestaurantData, SetRestaurantData] = useState([])
    let [filteredRestaurant,SetFilteredRestaurant]=useState([])
    let [searchText, setSearchText] = useState("")
   

    useEffect(() => {
        fetchData()

    }, [])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        SetRestaurantData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        SetFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if (RestaurantData.length === 0) {
        return (<Shimmer />

        )
    }




    return (

        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }} />

                    <button onClick={()=>{
                       let searched= RestaurantData.filter((e)=>e.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        console.log(searched)
                        SetFilteredRestaurant(searched)
                    }}>search</button>
                </div>


                <button class="filter-btn" onClick={() => {
                    const filteredData = RestaurantData.filter((res) => res.info.avgRating > 4.5)
                    SetRestaurantData(filteredData)
                }}> Filter best Rating</button>
            </div>
            <div className="restaurant-container">
                {
                    filteredRestaurant.map((restaurant) => {
                        return <RestaturantCard key={restaurant.info.id} resData={restaurant} />
                    })
                }
            </div>
        </div>
    )
}

export default Body;

