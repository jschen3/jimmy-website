import Card from 'react-bootstrap/Card'
import './horizontalcardcontainer.css';
import React from 'react';
import Button from 'react-bootstrap/Button'
export class MediumHorizontalCardContainer extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            currentMonthCards: null,
        }
    }
    getData(){
        const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        const today = new Date();
        const todayMonth = months[today.getMonth()];
        const todayYear = today.getFullYear();
        const todayMonthCardPath = 'content/vertical_cards/' + todayYear + '/' + todayMonth + '/' + todayMonth + '.json';
        fetch(todayMonthCardPath).then(response => { //move to a different time before render step
            return response.json()
        }).then(
            (currentMonthCards) => {
                this.setState({ currentMonthCards });
                console.log(this.state.currentMonthCards);
            });
    }
    render(){
        if (this.state.currentMonthCards!=null){
            let cardsArray = this.state.currentMonthCards.map((cardData) => 
            <Card>
                    <Card.Img className="col-md-3 col-lg-3 card-image" variant="left" src={cardData.image} />
                    <Card.Body className="col-md-9 col-lg-9 card-body">
                        <Card.Title className="card-title"><h2>{cardData.title}</h2>{cardData.description}<Button className="vertical-card-buttons" variant="primary" onClick={() => this.handleClick(cardData.linkUrl)}>{cardData.linkText}</Button>
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