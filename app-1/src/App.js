import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      name: ''
    }

  }

  addName(value){
    this.setState({
      name: value
    })
  }



  
  render() {
    console.log(this.state)
    
    return (
      <div className="App">
        <input placeholder='add name...' onChange={ (e) => this.addName(e.target.value)}
        value={this.state.name}/>
      </div>
    );
  }
  }


export default App;
