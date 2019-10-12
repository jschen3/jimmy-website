import Card from 'react-bootstrap/Card'
import './horizontalcardcontainer.css';
import React from 'react';
import Button from 'react-bootstrap/Button'
export class HomepageHorizontalCardContainer extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            currentMonthCards: null,
        }
    }
    getData(){
        const todayMonthCardPath = 'content/horizontalcards/homepagehorizontalcards/homepagecards.json'
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
                    <Card.Img className="col-md-4 col-lg-4 card-image" variant="left" src={cardData.image} />                    
                    <Card.Body className="col-md-8 col-lg-8 card-body">
                        <Card.Title className="card-title">
                            <h2>{cardData.title}</h2>
                            <h4>Article type: {cardData.type}</h4>
                            {cardData.description}
                        <Button className="vertical-card-buttons" variant="primary" onClick={() => this.handleClick(cardData.linkUrl)}>{cardData.linkText}</Button>
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
    handleClick(linkUrl) {
        window.location.href = linkUrl;
    }
}