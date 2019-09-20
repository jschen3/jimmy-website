import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {HomePage} from './pages/Homepage'
import {AboutMePage} from './pages/AboutMePage'

export default function App(){
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/aboutme" component={AboutMePage}/>
    </Switch>
  )
}


