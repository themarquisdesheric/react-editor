import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      color: '#ff0000',
      text: ''
    }
  }

  changeColor(color) {
    this.setState({ color });
  }

  changeText(text) {
    this.setState({ text });
  }

  render() {

    const { color, text } = this.state;

    return (
      <div className="App">
        
      <div className="App-header">
        <h1>Welcome to React Editor</h1>
      </div>

      <label>Message: 
        <input type="text"
               value={text}
               onChange={ e => this.changeText(e.target.value) } />
      </label>
      <br />
      <label>Color:
        <input type="color" 
               value={color}
               onChange={ e => this.changeColor(e.target.value) }/>
      </label>
      <br />
      <p style={{ color }}>{text}</p>
      </div>
    );
  }
}

export default App;
