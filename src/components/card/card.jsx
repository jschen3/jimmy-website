const card = ({ card }) => {
    return (
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src="{this.props.image}"/>
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>{this.props.description}</Card.Text>
                <Card.Link href="{this.props.linkUrl}">{this.props.linkText}</Card.Link>
            </Card.Body>
        </Card>
    )
}