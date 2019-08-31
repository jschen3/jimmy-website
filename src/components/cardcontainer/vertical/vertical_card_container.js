import React from 'react';
import 'vertical_card_container.css'
export class Card extends React.Component {
    constructor(props) {

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
                <Button variant="primary" href="{cardData.linkUrl}">{cardData.linkText}</Button>
            </Card.Body>
        </Card>
        );
    }
    render() {
        /*
        Create a 4 by 3 row of cards.
        map of all the cards. 
        */
        return ();
    }
}
