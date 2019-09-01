import React from 'react';
import 'vertical_card_container.css'
import listReactFiles from 'list-react-files'
export class Card extends React.Component {
    constructor(props) {
        super(props);
        months = ["january", "february","march","april","may","june","july","august","september","octover","november","december"];
        today = new Date();
        todayMonth = today.getMonth();
        firstMonth = months[todayMonth-2];
        secondMonth = months[secondMonth-1];
        todayMonth = months[todayMonth];
        firstMonthFolder = "content/cards/"+firstMonth;
        secondMonthFolder = "content/cards/"+secondMonth;
        monthFolder = "content/cards"+todayMonth;

        firstMonthFiles = listReactFiles(firstMonthFolder).then(files=>{
            //get all files and file contents and make cards.
        })


        /*
        fetch rows of cards.
        in a
        */

    }
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
        /*
        Create a 4 by 3 row of cards.
        map of all the cards. 
        */
        return (
            <div>
                <div className="card-row">
                    
                </div>
            </div>
        );
    }
}
