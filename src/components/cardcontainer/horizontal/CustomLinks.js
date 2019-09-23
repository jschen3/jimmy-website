import React from 'react'
export class CustomLinks extends React.Component{
    constructor(props){
        super(props);
        this.state={
            links:null
        }
    }
    getData(){
        const linksPath='content/carousels/links.json'
        fetch(linksPath).then(response => { //move to a different time before render step
            return response.json()
        }).then(
            (links) => {
                this.setState({ links });
                console.log(this.state.links);
            });
    }
    render(){
        if (this.state.links!=null){
            let linksArray = this.state.links.map((link)=>
            <p>
                <a href={link.linkUrl}>{link.linkText}</a>
            </p>
            );
        return (
        <div id="links">
            {linksArray ? linksArray:null}
        </div>);    
        }
        return null;
            
        
        
    }
    componentDidMount() {
        this.getData();
    } 
}