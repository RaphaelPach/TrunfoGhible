import React, { Component } from 'react';

class Forms extends Component {
  render() {
    return (
      <>
        <h1>Adiciona nova carta</h1>
        <form action="">
          <label htmlFor="name">
            Nome:
            <input data-testid="name-input" />
          </label>
          <label htmlFor="textarea">
            Descrição:
            <textarea data-testid="description-input"> </textarea>
          </label>
          <label htmlFor="Number">
            Atr01:
            <input type="number" data-testid="attr1-input" />
          </label>
          <label htmlFor="Number">
            Atr02:
            <input type="number" data-testid="attr2-input" />
          </label>
          <label htmlFor="Number">
            Atr03:
            <input type="number" data-testid="attr3-input" />
          </label>
          <label htmlFor="image">
            image
            <input data-testid="image-input" />
          </label>
          <label htmlFor="selected">
            <select data-testid="rare-input">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="checkbox">
            Super trunfo
            <input type="checkBox" data-testid="trunfo-input" />
          </label>
          <button type="button" id="button" data-testid="save-button">Salvar</button>
        </form>

      </>
    );
  }
}

export default Forms;
