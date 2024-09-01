import { FOOD_URL } from "../../utils/constants"

const RestaturantCard = (props) => {
    const { resData } = props
    const { name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId } = resData?.info
    return (
        <div className="restaurant-card">
            <img className="res-logo" alt="image food" src={FOOD_URL + cloudinaryImageId}></img>
            <h3 className="name">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>


        </div>
    )
}

export default RestaturantCard;