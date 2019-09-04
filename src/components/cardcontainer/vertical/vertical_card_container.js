import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export class VerticalCardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMonthCards:null,
            lastMonthCards:null,
            previousLastMonthCards:null
        }
    }
    componentWillMount(){    
        const months = ["january", "february","march","april","may","june","july","august","september","october","november","december"];
        const today = new Date();
        const todayMonth = months[today.getMonth()];
        const todayYear = today.getFullYear();
        const todayMonthCardPath = 'content/cards/'+todayYear+'/'+todayMonth+'/'+todayMonth+'.json';
       
        fetch(todayMonthCardPath).then(response =>{ //move to a different time before render step
            
            return response.json()
        }).then(
        (currentMonthCards)=>{
            
            this.setState({currentMonthCards});
            
        });
    }
        
        /*
        fetch rows of cards.
        in a
        */

    
    renderCard(cardData) {
        return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="{cardData.Image}" />
            <Card.Body>
                <Card.Title>{cardData.title}</Card.Title>
                <Card.Text>
                    {cardData.description}
                </Card.Text>
                <Button variant="primary" onClick={()=> this.handleClick(cardData.linkUrl)}>{cardData.linkText}</Button>
            </Card.Body>
        </Card>
        );
    }
    handleClick(linkUrl){
        window.location.href=linkUrl;
    }
    render() {
    //     /*
    //     Create a 4 by 3 row of cards.
    //     map of all the cards. 
    //     */
        var cards = this.state.currentMonthCards;
        console.log(cards);
        var cardList=cards.map(
            (cardData)=>{
            this.renderCard(cardData)
        });
        return (
            <div>
                <div className="card-row">
                    {cardList}
                </div>
            </div>
       );
    }
}
