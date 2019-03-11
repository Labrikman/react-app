import React, { Component } from 'react';
import './App.css';
import New from './component/New/New';
import Header from './component/Header/Header';
class App extends Component {

  render() {
    return (
      
      <div className="App">
        <header className="App-header">
        <New />
        <Header />
        </header>
      </div>
    );
  }
}

export default App;
