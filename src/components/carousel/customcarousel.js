import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import './carousel.css'

export class CustomCarousel extends React.Component{
    constructor(props){   
    super(props) 
        this.state = {
            images:null
        }
    }
    getData(){
           const imagesPath = 'content/carousels/'+this.props.name+"/"+this.props.name+".json"
           console.log(imagesPath);
           fetch(imagesPath).then(response => { //move to a different time before render step
            return response.json()
        }).then(
            (images) => {
                this.setState({ images });
                console.log(this.state.images);
            });
    }
    render(){
        
        if (this.state.images!=null){
            let imagesArray = this.state.images.map((image)=>
            <Carousel.Item>
                <img className="d-block w-100"
                src={image.imagePath} alt="images"
                 />
            </Carousel.Item>     
            );
            return (
             <Carousel>
                 {imagesArray ? imagesArray : null}
             </Carousel>
            );
        }
        return null; 
    }
    componentDidMount() {
        this.getData();
    } 
}