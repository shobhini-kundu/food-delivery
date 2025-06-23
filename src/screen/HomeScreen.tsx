import { IonContent, IonPage } from '@ionic/react';
import './HomeScreen.scss';
import FilterComponent from '../components/homeComponent/FilterComponent';
import HomeBanner from '../components/homeComponent/HomeBanner';
import RestaurantCard from '../components/homeComponent/RestaurantCard';
import { useEffect, useState } from 'react';
import { getAllRestuarant } from '../services/api';
import { IRestaurant } from '../interfaces/restuarant';

const HomeScreen: React.FC = () => {
  const[allRestuarant,setAllRestuarant]=useState<IRestaurant[]>()
  useEffect (()=>{
void getAllRestuarant ().then((response)=>{
  setAllRestuarant(response);
  

})
  },[])
  
  return (
    <IonPage>
    <IonContent fullscreen>
      <div className="home_screen">
        <div className="header_section">
          <FilterComponent/>
        </div>
        <div className="body_section">
          <div className="banner_section">
            <HomeBanner/>
          </div>
          <div className="restaurant_section">
            {allRestuarant && allRestuarant.map((restaurant,restaurantIndex)=>{return(
              <div key={restaurantIndex}>
              <RestaurantCard 
              restuarantData ={restaurant}/>
              </div>
            )}
          ) }

          </div>
          
        </div>
      </div>
    </IonContent>
    </IonPage>
  );
};

export default HomeScreen;
