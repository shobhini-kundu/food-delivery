import { IonRouterOutlet } from '@ionic/react'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { IonReactRouter } from '@ionic/react-router'
import HomeScreen from './screen/HomeScreen'
import RestaurantMenuScreen from './screen/RestaurantMenuScreen'
const AppRouter = () => {
return (
    <>
        <IonReactRouter>
    <IonRouterOutlet>
        <Route exact path="/home">
    <HomeScreen />
        </Route>
        <Route exact path="/">
        <Redirect to="/home" />
        </Route>
        <Route exact path="/restaurant-menu/:restaurantId">
    <RestaurantMenuScreen />
        </Route>
</IonRouterOutlet>
    </IonReactRouter>
    </>
)
}

export default AppRouter