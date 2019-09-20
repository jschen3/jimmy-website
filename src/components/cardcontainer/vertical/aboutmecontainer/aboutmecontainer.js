import Card from 'react-bootstrap/Card';
import React from 'react';
import './aboutmecontainer.css';
export class AboutMeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: null
        }
    }
    getData() {
        const aboutMeImagesJson = 'content/vertical_cards/aboutme/aboutme.json'
        fetch(aboutMeImagesJson).then(response => { //move to a different time before render step
            return response.json()
        }).then(
            (images) => {
                this.setState({ images });
                console.log(this.state.images);
            });
    }
   
    render() {
        if (this.state.images != null) {
            let imagesArray = this.state.images.map((image) =>
                <Card className="col-md-4 col-lg-4 h-100">
                    <Card.Img className="h-100" variant="top" src={image.imagePath} />
                    <Card.Body className="h-10">
                    </Card.Body>
                </Card>);
            return (
                <div>
                    <div className="row">
                        <div className="d-flex align-items-stretch">
                            {imagesArray ? imagesArray : null}
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }
    componentDidMount() {
        this.getData();
    }    
}