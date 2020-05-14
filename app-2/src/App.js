import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      people: ['jason', 'alex', 'cam', 'barrett', 'mikey']
    }

  }

  render(){
    let showPeople = this.state.people.map((element, index) => {
      return <h2 key = {index}>{element}</h2>
    })
    return (
      <div className="App">
        {showPeople}
      </div>
    );
  }
}


export default App;
