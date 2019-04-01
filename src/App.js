import React, { Component } from 'react';
import './App.scss';
import Circle from './components/Circle/Circle';
import Header from './components/Header/Header';
import WordList from './components/WordList/WordList';

class App extends Component {
  constructor(){
    super();
    this.state = {
          
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <div className='body'>
          <Circle/>
          <WordList/>
        </div>
      </div>
    );
  }
}

export default App;
