import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Home from '../../pages/Home/Home'
import Currencies from '../../pages/Currencies/Currencies'



const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact={true} path="/home" component={Home}/>
            <Route exact={true} path="/currencies" component={Currencies}/>
            <Redirect to="/home" />
        </Switch>
    </BrowserRouter>

    )
}

export default Router
