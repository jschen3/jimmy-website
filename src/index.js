import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {VerticalCardContainer} from './components/cardcontainer/vertical/verticalcardcontainer/verticalcardcontainer';
import { AboutMeContainer } from './components/cardcontainer/vertical/aboutmecontainer/aboutmecontainer';
import { HorizontalContainer } from './components/cardcontainer/horizontal/horizontalcontainer';
import { RadarDiagram }  from './components/diagram/radardiagram';
// import  {HorizontalCardContainer} from './components/cardcontainer/horizontalcardcontainer/horizontalcardcontainer';
import { CustomNavbar } from './components/customnavbar/customnavbar';
import {HomepageHorizontalCardContainer } from './components/cardcontainer/horizontalcardcontainer/homepagehorizontalcardcontainer'
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

//ReactDOM.render(<HorizontalCardContainer/>, document.getElementById('horizontalCardContainer'));
//ReactDOM.render(<ResumePdf/>, document.getElementById('resumePdf'));
if (document.getElementById('navbar')){
    ReactDOM.render(<CustomNavbar />, document.getElementById('navbar'));
}    
if (document.getElementById('homepageHorizontalCardContainer')) {
    ReactDOM.render(<HomepageHorizontalCardContainer />, document.getElementById('homepageHorizontalCardContainer'));
}

if (document.getElementById('aboutMeImages')) {
    ReactDOM.render(<AboutMeContainer />, document.getElementById('aboutMeImages'));

}
if (document.getElementById('horizontalContainer')) {
    ReactDOM.render(<HorizontalContainer />, document.getElementById('horizontalContainer'));
}

if (document.getElementById('customCarousel')){
    ReactDOM.render(<CustomCarousel name='yosemite' />, document.getElementById('customCarousel'));
}
if (document.getElementById('radarDiagram')){
    ReactDOM.render(<RadarDiagram/>, document.getElementById('radarDiagram'));
}
