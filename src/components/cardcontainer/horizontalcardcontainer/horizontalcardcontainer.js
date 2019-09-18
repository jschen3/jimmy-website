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
        const horizontalCardsJson = 'content/horizontal_cards/homepage_horizontal_cards/homepage_horizontal_cards.json'
        fetch(horizontalCardsJson).then(response => { //move to a different time before render step
            return response.json()
        }).then(
            (cards) => {
                this.setState({ cards });
                console.log(this.state.cards);
            });
    }
    render(){
        if (this.state.cards!=null){
            let cardsArray = this.state.cards.map((cardData) => 
            <Card>
                    <Card.Img className="col-md-4 col-lg-4 card-image" variant="left" src={cardData.image} />   
                    <Card.Body className="col-md-8 col-lg-8 card-body">
                        <Card.Title className="card-title"><h2>{cardData.title}</h2>{cardData.description}
                        </Card.Title>
                    </Card.Body>
            </Card>);
            return (
                <div className="horizontal-card-container">
                    {cardsArray ? cardsArray:null}
                </div>
            )
        }
        return null;
    }
    componentDidMount() {
        this.getData();
    }
    
}