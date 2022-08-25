import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardImage: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardRare: '',
    cardTrunfo: false,
    /* hasTrunfo: true, */
    isSaveButtonDisabled: true,
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
    if (cardName && cardDescription && cardImage && cardRare
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
    }
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.saveForm());
  };

  onSaveButtonClick = (objetoInfo) => {
    this.setState((prevState) => ({
      data: [...prevState.data, objetoInfo],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
    }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      data,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ data.some((digimon) => digimon.cardTrunfo === true) }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        {
          data.map((agumon) => (
            <Card
              cardName={ agumon.cardName }
              cardDescription={ agumon.cardDescription }
              cardImage={ agumon.cardImage }
              cardAttr1={ agumon.cardAttr1 }
              cardAttr2={ agumon.cardAttr2 }
              cardAttr3={ agumon.cardAttr3 }
              cardRare={ agumon.cardRare }
              cardTrunfo={ agumon.cardTrunfo }
              isSaveButtonDisabled={ agumon.isSaveButtonDisabled }
              key={ agumon.cardName }
            />
          ))
        }

      </div>
    );
  }
}

export default App;
