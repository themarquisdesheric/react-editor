import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      color: '#ff0000',
      size: 22,
      backgroundColor: '#ffffff',
      text: '',

    }
  }

  changeColor(color) {
    this.setState({ color });
  }

  changeSize(size) {
    this.setState({ size });
  }

  changeBackgroundColor(backgroundColor) {
    this.setState({ backgroundColor })
  }

  changeText(text) {
    this.setState({ text });
  }

  render() {

    const { color, size, backgroundColor, text } = this.state;

    return (
      <div className="App"
           style={{ backgroundColor: backgroundColor }}>
        
        <div className="App-header">
          <h1>Welcome to React Editor</h1>
        </div>
        
        <label>Font Color:
          <input type="color" 
                value={color}
                onChange={ e => this.changeColor(e.target.value) } />
        </label>

        <label>
          <input type="color"
          value={backgroundColor}
          onChange={ e => this.changeBackgroundColor(e.target.value) } />
        </label>
        
        <label>Size:
          <input type="range" 
                value={size}
                onChange={ e => this.changeSize(e.target.value) } />
        </label>

        <label>Message: 
          <input type="text"
                value={text}
                onChange={ e => this.changeText(e.target.value) } />
        </label>
        
        <p style={{ color, 
          fontSize: `${size}px`
        }}>
          {text}
        </p>
      </div>
    );
  }
}

export default App;
