import React from 'react'
import "./RestaurantCard.scss"
import { FaStar } from "react-icons/fa";
import { IRestaurant } from '../../interfaces/restuarant';
interface IRestaurantCardProps{
  restuarantData:IRestaurant
}
const RestaurantCard:React.FC <IRestaurantCardProps> = ({restuarantData}) => {
  return (
    <>
    <div className="restaurant_card">
        <div className="image_section" >
            <img src= '.\public\asset\images\restuarant-card.jpg'/>
            
        </div>
        <div className="content_section">
            <div className="title">{restuarantData.name}
            </div>
            <div className="description">{restuarantData.description}</div>
            <div className="rating-section">
                <div className="offer">{restuarantData.currentOffer}</div>
                <div className="rating">
                  <FaStar /><span>{restuarantData.rating}</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default RestaurantCard