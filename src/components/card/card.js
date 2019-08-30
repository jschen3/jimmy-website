import React from 'react';
import {card} from 'card';
import './card.css';
export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.card = {
            image: null,
            title: null,
            type: null,
            description: null,
            linkText: null,
            linkUrl: null
        }
    }
    render() {
        return (card);
    }
}