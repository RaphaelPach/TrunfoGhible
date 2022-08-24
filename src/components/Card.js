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
      <div>
        <h3 data-testid="name-card">
          value=
          { cardName }
        </h3>
        <div>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        </div>
        <div>
          <p data-testid="description-card">
            value=
            { cardDescription }
          </p>
        </div>
        <div>
          <p data-testid="attr1-card">
            value=
            { cardAttr1 }
          </p>
        </div>
        <div>
          <p data-testid="attr2-card">
            value=
            { cardAttr2 }
          </p>
        </div>
        <div>
          <p data-testid="attr3-card">
            value=
            { cardAttr3 }
          </p>
        </div>
        <div>
          <p data-testid="rare-card">
            value=
            { cardRare }
          </p>
        </div>
        <div>
          {
            (cardTrunfo) && <p data-testid="trunfo-card">Super Trunfo</p>
          }
        </div>
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
