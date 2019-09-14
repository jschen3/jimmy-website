import React from 'react';
import RadarChart from 'react-svg-radar-chart';
import './radardiagram.css';
export class RadarDiagram extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:null
        }
    }
    render(){
        const data = [
            {
              data: {
                battery: 0.7,
                design: .8,
                useful: 0.9,
                speed: 0.67,
                weight: 0.8
              },
              meta: { color: '#1ecbe1' },
              scales:3
        }]
        const captions = {
            // columns
            battery: 'Battery Capacity',
            design: 'Design',
            useful: 'Usefulness',
            speed: 'Speed',
            weight: 'Weight'
          };
          return (<RadarChart
            captions={captions}
            data={data}
            size={450}
            scales={3}
            axes={true}
            scaleProps={{ className: 'scale', fill: 'black', stroke:"#999",
            strokeWidth:"0.2" }}
            />);
    }        
    
}
