import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

const initialState = {
  cardName: '',
  cardImage: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardRare: 'normal',
  cardTrunfo: false,
  /* hasTrunfo: true, */
  isSaveButtonDisabled: true,
};
class App extends React.Component {
  state = {
    ...initialState,
    data: [],
  };

  saveForm = () => {
    const { cardName,
      cardImage,
      cardDescription,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;
    const maxAtr = 91;
    const minAtr = 0;
    const sun = (Number(cardAttr1)) + (Number(cardAttr2)) + (Number(cardAttr3));
    const num = 210;
    /*  if (cardName && cardDescription && cardImage && cardRare
      && cardAttr1 < maxAtr && cardAttr2 < maxAtr && cardAttr3 < maxAtr
      && cardAttr1 >= minAtr && cardAttr2 >= minAtr && cardAttr3 >= minAtr
      && sun <= num) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } */
    const valdidation = (cardName && cardDescription && cardImage && cardRare
      && cardAttr1 < maxAtr && cardAttr2 < maxAtr && cardAttr3 < maxAtr
      && cardAttr1 >= minAtr && cardAttr2 >= minAtr && cardAttr3 >= minAtr
      && sun <= num);
    this.setState({
      isSaveButtonDisabled: !valdidation,
    });
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.saveForm);
  };

  onSaveButtonClick = (objetoInfo) => {
    this.setState((prevState) => ({
      data: [...prevState.data, objetoInfo],
      ...initialState,
    }));
  };

  render() {
    const {
      data,
    } = this.state;
    return (
      <main>
        <div className="leftSide">
          <header>
            <h1>
              Ghibli Card Game

            </h1>
          </header>

          <Form
            onInputChange={ this.onInputChange }
            /* cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled } */
            {
              ...this.state
            }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ data.some((digimon) => digimon.cardTrunfo === true) }
          />
        </div>
        <div className="rightSide">
          <header>
            <h1>
              Creating your cards
            </h1>
          </header>

          <div>
            <Card
              /* cardName={ cardName }
              cardDescription={ cardDescription }
              cardImage={ cardImage }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled } */
              {
                ...this.state
              }
            />
          </div>
          {
            data.map((cardIm) => (
              <Card
                /* cardName={ cardIm.cardName }
                cardDescription={ cardIm.cardDescription }
                cardImage={ cardIm.cardImage }
                cardAttr1={ cardIm.cardAttr1 }
                cardAttr2={ cardIm.cardAttr2 }
                cardAttr3={ cardIm.cardAttr3 }
                cardRare={ cardIm.cardRare }
                cardTrunfo={ cardIm.cardTrunfo }
                isSaveButtonDisabled={ cardIm.isSaveButtonDisabled } */
                {
                  ...cardIm
                }
                key={ cardIm.cardName }
              />
            ))
          }

        </div>
      </main>
    );
  }
}

export default App;
