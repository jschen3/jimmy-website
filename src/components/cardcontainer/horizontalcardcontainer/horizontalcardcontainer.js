import Card from 'react-bootstrap/Card'
import './horizontalcardcontainer.css';
import React from 'react';
export class HorizontalCardContainer extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            cards:null
        }
    }
    getData(){

    }
    render(){
        if (this.state.cards!=null){
            let cardsArray = this.state.cards.map((cardData) => 
            <Card className="h-100">
                    <Card.Img className="h-50" variant="top" src={cardData.image} />
                    <Card.Body className="h-10">
                        <Card.Title className="h-10 card-title">{cardData.title}</Card.Title>
                        <Card.Text>
                            {cardData.description}
                        </Card.Text>
                    </Card.Body>
            </Card>);
            return (
                <div>
                    {cardsArray ? cardsArray:null}
                </div>
            )
        }
        return null;
    }
}