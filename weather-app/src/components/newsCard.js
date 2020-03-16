import React from "react";
import { Card, CardTitle, CardText, CardImg} from "reactstrap";

export default function NewsCard(props) {
  return (
    <a className="card-a" href={props.url}>
        <Card className="news-card">
        <CardTitle className="card-title">{props.title}</CardTitle>
        <CardImg className="card-img" src={props.image}/>
        <CardText  className="card-desc">{props.description}</CardText>
        <CardText className="card-source">{props.author}</CardText>
        <p>Learn More...</p>
        </Card>
    </a>
  );
}