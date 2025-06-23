import { IonContent, IonPage } from '@ionic/react';
import './HomeScreen.scss';
import FilterComponent from '../components/homeComponent/FilterComponent';
import HomeBanner from '../components/homeComponent/HomeBanner';
import RestaurantCard from '../components/homeComponent/RestaurantCard';

const HomeScreen: React.FC = () => {
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
            <RestaurantCard/>
          </div>
          
        </div>
      </div>
    </IonContent>
    </IonPage>
  );
};

export default HomeScreen;
