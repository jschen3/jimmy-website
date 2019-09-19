import React from 'react';
import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/Homepage'
import AboutMePage from './pages/AboutMePage'
import ReactDOM from 'react-dom';
import {AboutMeContainer} from './components/cardcontainer/vertical/aboutmecontainer/aboutmecontainer';
import { HorizontalContainer } from './components/cardcontainer/horizontal/horizontalcontainer';
import {CustomNavbar} from './components/customnavbar/customnavbar';
import {MediumHorizontalCardContainer} from './components/cardcontainer/horizontalmedium/mediumhorizontalcardcontainer'
export default function App(){
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/aboutme" component={AboutMePage}/>
    </Switch>
  )
  ReactDOM.render(<AboutMeContainer/>, document.getElementById('aboutMeImages')); 
ReactDOM.render(<HorizontalContainer/>, document.getElementById('horizontalContainer'));
// ReactDOM.render(<RadarDiagram/>, document.getElementById('radarDiagram'));
ReactDOM.render(<CustomNavbar/>, document.getElementById('navbar'));
//ReactDOM.render(<HorizontalCardContainer/>, document.getElementById('horizontalCardContainer'));
ReactDOM.render(<MediumHorizontalCardContainer/> , document.getElementById('mediumHorizontalCardContainer'));
//ReactDOM.render(<ResumePdf/>, document.getElementById('resumePdf'));
}


