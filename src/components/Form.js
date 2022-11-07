import React, { Component } from 'react';
import PropType from 'prop-types';

class Form extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    const card = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };
    return (
      <form className="formSide">
        <div className="agumon">
          <label htmlFor="name">
            Nome:
            <br />
            <input
              name="cardName"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="agumon">
          <label htmlFor="textarea" rows="250" cols="175">
            Descrição:
            <br />
            <textarea
              name="cardDescription"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="agumon">
          <label htmlFor="Number">
            Atr01:
            <input
              className="patamon"
              name="cardAttr1"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="agumon">
          <label htmlFor="Number">
            Atr02:
            <input
              className="patamon"
              name="cardAttr2"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="agumon">
          <label htmlFor="Number">
            Atr03:
            <input
              className="patamon"
              name="cardAttr3"
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="agumon">
          <label htmlFor="image">
            Imagem:
            <input
              className="patamon"
              name="cardImage"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <label htmlFor="selected" className="selected">
          Raridade:
          <select
            className="patamon"
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="Normal">Normal</option>
            <option value="Raro">Raro</option>
            <option value="Muito raro">Muito raro</option>
          </select>
        </label>

        <div className="agumon">
          <label htmlFor="checkbox" className="selected">
            Super trunfo
            {
              !hasTrunfo ? (<input
                name="cardTrunfo"
                type="checkBox"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />)
                : <p>Você já tem um Super Trunfo em seu baralho</p>
            }
          </label>
        </div>
        <div className="agumon">
          <button
            className="button"
            name="isSaveButtonDisabled"
            type="button"
            id="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ () => onSaveButtonClick(card) }
          >
            Salvar
          </button>
        </div>
      </form>

    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropType.string,
  cardDescription: PropType.string,
  cardAttr1: PropType.string,
  cardAttr2: PropType.string,
  cardAttr3: PropType.string,
  cardImage: PropType.string,
  cardRare: PropType.string,
  cardTrunfo: PropType.bool,
  /* hasTrunfo: PropType.bool, */
  isSaveButtonDisabled: PropType.bool,
  onInputChange: PropType.func,
  onSaveButtonClick: PropType.func,

}.isRequired;
