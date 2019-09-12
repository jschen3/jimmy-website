import React from 'react';
import './horizontalcontainer.css';
export class HorizontalContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: null
        }
    }
    getData() {
        const aboutMeTextJson = 'content/horizontal_cards/aboutme/aboutme.json'
        fetch(aboutMeTextJson).then(response => { //move to a different time before render step
            return response.json()
        }).then(
            (text) => {
                this.setState({ text });
                console.log(this.state.text);
            });
    }
    render() {

        if (this.state.text != null) {
            let textArray = this.state.text.map((text) =>
                <p>{text.text}</p>
            );
            return (
                <div>
                    <h1>About Me</h1>
                    <div>
                        {textArray ? textArray : null}
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