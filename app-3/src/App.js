import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      list: '',
      people: ['jason', 'alex', 'cam', 'barrett', 'mikey']
    }
  }

  handleChange(filter){
    this.setState({list: filter});
  }

  render(){
    let showPeople = this.state.people
    .filter(element => {
      return element.includes(this.state.list);
    })
    .map((element, index) => {
    return <h2 key= {index}>{element}</h2>
    })
    return (
      <div className="App">
        <input onChange = {e => this.handleChange(e.target.value)} type="text" />
        {showPeople}
      </div>
    );
  }
} 
  
  
export default App;
