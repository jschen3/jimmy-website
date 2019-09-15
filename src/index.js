import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {VerticalCardContainer} from './components/cardcontainer/vertical/verticalcardcontainer/verticalcardcontainer';
import {AboutMeContainer} from './components/cardcontainer/vertical/aboutmecontainer/aboutmecontainer';
import { HorizontalContainer } from './components/cardcontainer/horizontal/horizontalcontainer';
import { RadarDiagram }  from './components/diagram/radardiagram';
import  {HorizontalCardContainer} from './components/cardcontainer/horizontalcardcontainer/horizontalcardcontainer';
import {CustomNavbar} from './components/customnavbar/customnavbar';
// ReactDOM.render(<VerticalCardContainer/>
//    , document.getElementById('verticalCardContainer'));
// ReactDOM.render(<AboutMeContainer/>, document.getElementById('aboutMeImages')); 
// ReactDOM.render(<HorizontalContainer/>, document.getElementById('horizontalContainer'));
// ReactDOM.render(<RadarDiagram/>, document.getElementById('radarDiagram'));
ReactDOM.render(<CustomNavbar/>, document.getElementById('navbar'));
ReactDOM.render(<HorizontalCardContainer/>, document.getElementById('horizontalCardContainer'));
