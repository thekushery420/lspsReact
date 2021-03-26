import React from "react"
import Header from "../src/Components/Header/Header"
import {Switch, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Rewards from "./Pages/Rewards"
import OrderOnline from "./Pages/OrderOnline"

import "../src/App.css"

function App(){
return(
    <>
      <Header />
      <Switch>
            <Route exact path="/" >
                <Home />
            </Route>
            <Route exact path="/Rewards" >
                <Rewards />
            </Route>
            <Route exact path="/OrderOnline" >
                <OrderOnline />
            </Route>
      </Switch>
    </>
 )


}

export default App