import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {VerticalCardContainer} from './components/cardcontainer/vertical/verticalcardcontainer/verticalcardcontainer';
import { AboutMeContainer } from './components/cardcontainer/vertical/aboutmecontainer/aboutmecontainer';
import { HorizontalContainer } from './components/cardcontainer/horizontal/horizontalcontainer';
// import { RadarDiagram }  from './components/diagram/radardiagram';
// import  {HorizontalCardContainer} from './components/cardcontainer/horizontalcardcontainer/horizontalcardcontainer';
import { CustomNavbar } from './components/customnavbar/customnavbar';
import { MediumHorizontalCardContainer } from './components/cardcontainer/horizontalmedium/mediumhorizontalcardcontainer'
// import {ResumePdf} from './components/pdfviewer/ResumePdf'
import {CustomCarousel} from './components/carousel/customcarousel'
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.querySelector('#root')
)

// ReactDOM.render(<RadarDiagram/>, document.getElementById('radarDiagram'));
//ReactDOM.render(<HorizontalCardContainer/>, document.getElementById('horizontalCardContainer'));
//ReactDOM.render(<ResumePdf/>, document.getElementById('resumePdf'));
ReactDOM.render(<CustomNavbar />, document.getElementById('navbar'));
if (document.getElementById('mediumHorizontalCardContainer')) {
    ReactDOM.render(<MediumHorizontalCardContainer />, document.getElementById('mediumHorizontalCardContainer'));
}

if (document.getElementById('aboutMeImages')) {
    ReactDOM.render(<AboutMeContainer />, document.getElementById('aboutMeImages'));

}
if (document.getElementById('horizontalContainer')) {
    ReactDOM.render(<HorizontalContainer />, document.getElementById('horizontalContainer'));
}

if (document.getElementById('customcarousel')){
    ReactDOM.render(<CustomCarousel name="yosemite" />, document.getElementById('customCarousel'));
}