import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {HomePage} from './pages/Homepage'
import {AboutMePage} from './pages/AboutMePage'
import {Musicalify} from './pages/Musicalify'
import {ImagePortfolio} from './pages/ImagePortfolio';
import {Portfolio} from './pages/Portfolio';
export default function App(){
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/aboutme" component={AboutMePage}/>
      <Route exact path="/musicalify" component={Musicalify}/>
      <Route exact path="/imageportfolio" component={ImagePortfolio}/>
      <Route exact path="/yosemite" component={Portfolio}/>
      <Route exact path="/aspen" component={Portfolio}/>
    </Switch>
  )
}


