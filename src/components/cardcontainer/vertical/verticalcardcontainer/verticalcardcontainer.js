import Card from 'react-bootstrap/Card'
import React from 'react';
import Button from 'react-bootstrap/Button'
import './verticalcardcontainer.css';
export class VerticalCardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMonthCards: null,
            lastMonthCards: null,
            previousLastMonthCards: null
        }
    }

    getData() {
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
    /*
    fetch rows of cards.
    in a
    */
    handleClick(linkUrl) {
        window.location.href = linkUrl;
    }
    render() {
        if (this.state.currentMonthCards != null) {
            let cardsArray = this.state.currentMonthCards.map((cardData) =>
                <Card style={{ width: '20rem', float: 'left' }} className="h-100">
                    <Card.Img className="h-50" variant="top" src={cardData.image} />
                    <Card.Body className="h-10">
                        <Card.Title className="h-10 card-title">{cardData.title}</Card.Title>
                        <Card.Text>
                            {cardData.description}
                        </Card.Text>
                        <Button className="h-10 vertical-card-buttons" variant="primary" onClick={() => this.handleClick(cardData.linkUrl)}>{cardData.linkText}</Button>
                    </Card.Body>
                </Card>);
            return (
                <div>
                    <div className="row">
                        <div className="d-flex align-items-stretch">
                            {cardsArray ? cardsArray : null}
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
