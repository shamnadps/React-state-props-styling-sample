import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input';
import Output from './Output/Output';

class App extends Component {
  state = {
    inputText: 'start typing'
  }
  onChangeHandler = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Input
          change={this.onChangeHandler}
          value={this.state.inputText} />
        <Output value={this.state.inputText} />
      </div>
    );
  }
}

export default App;
