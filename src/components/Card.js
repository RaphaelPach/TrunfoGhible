import React, { Component } from 'react';
import PropType from 'prop-types';

class Card extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="preview">
        <h3 data-testid="name-card">
          <div className="kiki">{ cardName }</div>
        </h3>
        <div className="photo">
          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
            className="container"
          />
        </div>
        <p data-testid="description-card">
          <div className="kiki">{ cardDescription }</div>
        </p>
        <p data-testid="attr1-card" className="raphael">
          Power:
          <div className="atr">{ cardAttr1 }</div>
        </p>
        <p data-testid="attr2-card" className="raphael">
          Bravery:
          <div className="atr">{ cardAttr2 }</div>
        </p>
        <p data-testid="attr3-card" className="raphael">
          Spell:
          <div className="atr">{ cardAttr3 }</div>
        </p>
        <p data-testid="rare-card">
          <div className="rare">{ cardRare }</div>
        </p>
        {
          (cardTrunfo) && (
            <p className="trunfo" data-testid="trunfo-card">Super Trunfo</p>)
        }
      </div>

    );
  }
}

export default Card;

Card.propTypes = {
  cardName: PropType.string,
  cardDescription: PropType.string,
  cardAttr1: PropType.string,
  cardAttr2: PropType.string,
  cardAttr3: PropType.string,
  cardImage: PropType.string,
  cardRare: PropType.string,
  cardTrunfo: PropType.bool,

}.isRequired;
