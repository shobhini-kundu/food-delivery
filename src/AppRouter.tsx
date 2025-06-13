import { IonRouterOutlet } from '@ionic/react'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { IonReactRouter } from '@ionic/react-router'
import HomeScreen from './screen/HomeScreen'
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
</IonRouterOutlet>
    </IonReactRouter>
    </>
)
}

export default AppRouter