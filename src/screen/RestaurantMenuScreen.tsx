import React, { useEffect, useState } from 'react'
import "./RestaurantMenuScreen.scss"
import { IonContent, IonPage } from '@ionic/react'
import MenuCard from '../components/menuComponents/MenuCard'
import { useHistory, useParams } from 'react-router'
import { getItemByRestuarantId } from '../services/api'
import { IMenuItems } from '../interfaces/restuarant'
const RestaurantMenuScreen :React.FC = () => {
    const[allRestuarantMenuItems, setAllRestuarantMenuItems] = useState<IMenuItems[]>([]);
    const {restaurantId} = useParams<{restaurantId : string}>();
    const history = useHistory();
    useEffect(() => {
getItemByRestuarantId(restaurantId).then((response) => {
    setAllRestuarantMenuItems(response)

}).catch((error)=> {console.log(error)})
    },[])
return (
    <IonPage>
        <IonContent>
    <div className='restaurant_menu_screen'> 
    <div className="menu_header">
        <div className="back_button" onClick={()=> {history.goBack();}} >back </div>
        <div className="title">Lorem, ipsum dolor. </div>
    </div>
    <div className="menu_body">
        <div className="menu_card_section">
            {allRestuarantMenuItems && allRestuarantMenuItems.map((menuItems,menuItemsIndex)=> {
                return(
                    <div className='menu_list' key={menuItemsIndex}>
                        <MenuCard 
                        itemData = {menuItems}
                        />
                    </div>
                )})}
            
        </div>
    </div>
    </div>
        </IonContent>
    </IonPage>
)
}

export default RestaurantMenuScreen