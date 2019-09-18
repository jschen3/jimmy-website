import React from 'react';
import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/Homepage'
import ReactDOM from 'react-dom'
import {CustomNavbar} from './components/customnavbar/customnavbar';
import {MediumHorizontalCardContainer} from './components/cardcontainer/horizontalmedium/mediumhorizontalcardcontainer'
//import AboutMePage from './pages/AboutMePage'

export default function App(){
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    
    </Switch>
  )
}
// import './index.css';
// import {VerticalCardContainer} from './components/cardcontainer/vertical/verticalcardcontainer/verticalcardcontainer';
// import {AboutMeContainer} from './components/cardcontainer/vertical/aboutmecontainer/aboutmecontainer';
// import { HorizontalContainer } from './components/cardcontainer/horizontal/horizontalcontainer';
// import { RadarDiagram }  from './components/diagram/radardiagram';
// import  {HorizontalCardContainer} from './components/cardcontainer/horizontalcardcontainer/horizontalcardcontainer';

// import {ResumePdf} from './components/pdfviewer/ResumePdf'

// // ReactDOM.render(<AboutMeContainer/>, document.getElementById('aboutMeImages')); 
// // ReactDOM.render(<HorizontalContainer/>, document.getElementById('horizontalContainer'));
// // ReactDOM.render(<RadarDiagram/>, document.getElementById('radarDiagram'));
//ReactDOM.render(<CustomNavbar/>, document.getElementById('navbar'));
// //ReactDOM.render(<HorizontalCardContainer/>, document.getElementById('horizontalCardContainer'));
//ReactDOM.render(<MediumHorizontalCardContainer/> , document.getElementById('mediumHorizontalCardContainer'));
// //ReactDOM.render(<ResumePdf/>, document.getElementById('resumePdf'));
// export default App()

