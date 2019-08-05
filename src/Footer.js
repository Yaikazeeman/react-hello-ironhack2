import React, { Component } from "react";
import Card from "./Card";
import './Footer.css';

var card = {
  card1: {
    imageURL: 'images/icon1.png',
    headerText: 'Declaritive',
    text: 'blablablablablabalblablablablablabla'
  },
  card2: {
    imageURL: 'images/icon2.png',
    headerText: 'Components',
    text: 'blablablablablabalblablablablablabal'
  },
  card3: {
    imageURL: 'images/icon3.png',
    headerText: 'Single-way',
    text: 'blablablablablabalblablablablablabal'
  },
  card4: {
    imageURL: 'images/icon4.png',
    headerText: 'JSX',
    text: 'blablablablablabalblablablablablabal'
  }
}


class Footer extends Component {

  render() {
    return (
      <footer>
        <Card image={card.card1.imageURL} title={card.card1.headerText} text={card.card1.text} />
        <Card image={card.card2.imageURL} title={card.card2.headerText} text={card.card2.text}/>
        <Card image={card.card3.imageURL} title={card.card3.headerText} text={card.card3.text}/>
        <Card image={card.card4.imageURL} title={card.card4.headerText} text={card.card4.text}/>
      </footer>
    );
  }
}


export default Footer;