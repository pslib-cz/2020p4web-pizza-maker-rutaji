import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Calzone from "./page/Calzone"
import Home from "./page/Home"
import Ingredients from "./page/Ingredients"
import Pizza from "./page/pizza"
import Navbar from "./Component/Navbar"
import C4 from "./page/404"

import { IngredientsProvider } from "./Component/IngredientsProvider";

function App() {
  return (
    <div >
      
      <Router>

      <Navbar/>
      <IngredientsProvider>
        <Switch>
        <Route  exact path='/'  component={Home} />
        <Route  path='/order/pizza' exact component={Pizza} />
        <Route  path='/order/calzone' exact component={Calzone} />
        <Route  path='/ingredients' exact component={Ingredients} />
        <Route component={C4}/>
        </Switch>
        </IngredientsProvider>
      </Router>
    </div>
  );
}

export default App;
