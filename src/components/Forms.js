import React, { Component } from 'react';

class Forms extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      /* hasTrunfo, */
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <>
        <h1>Adiciona nova carta</h1>
        <form action="">
          <label htmlFor="name">
            Nome:
            <input
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="textarea">
            Descrição:
            <textarea
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="Number">
            Atr01:
            <input
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="Number">
            Atr02:
            <input
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="Number">
            Atr03:
            <input
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="image">
            image
            <input
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="selected">
            <select
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="checkbox">
            Super trunfo
            <input
              type="checkBox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            type="button"
            id="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar

          </button>
        </form>

      </>
    );
  }
}

export default Forms;

Forms.propTypes = {
  cardName: PropType.string,
  cardDescription: PropType.string,
  cardAttr1: PropType.string,
  cardAttr2: PropType.string,
  cardAttr3: PropType.string,
  cardImage: PropType.string,
  cardRare: PropType.string,
  cardTrunfo: PropType.bool,
  hasTrunfo: PropType.bool,
  isSaveButtonDisabled: PropType.bool,
  /* onInputChange: PropType.func,
  onSaveButtonClick: PropType.func, */

}.isRequired;
