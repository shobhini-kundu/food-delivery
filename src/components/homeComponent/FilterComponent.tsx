import React from 'react'
import "./FilterComponent.scss"
import { IoIosSearch  } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { TiLocation } from "react-icons/ti";

const FilterComponent:React.FC = () => {
return (
    <>
        <div className='filter_component'>
            <div className="filter_section">
                <div className="location_container">
                    <div className="location_title">Your Location</div>
                    <div className="location_content">
                    <div className="location_icon"><TiLocation /></div>
                    <div className="location">Lorem, ipsum dolor</div>
                    </div>
                </div>
                <div className="search_container">
                    <div className="search_icon">< IoIosSearch  className='icon'/></div>
                    <input type="text" className="search_input" placeholder='Search Restaurant'/>
                    <div className="cross_icon"><RxCross2 className='icon'/></div>
                </div>
            </div>
        </div>
    </>
)
}

export default FilterComponent