import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      userName: '',
      password: ''
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleUserName(name){
    this.setState({
      userName: name
    })
  }

  handlePassword(pass){
    this.setState({
      password: pass
    })
  }

  handleLogin(){
   alert(`Welcome!  your username is ${this.state.userName} and password is ${this.state.password}`)
  }

  render(){
    return (
      <div className="App">
        <h1>LOG IN</h1>
        <input placeholder='Username' onChange={e => this.handleUserName(e.target.value)} type="text"/>
        <input placeholder='Password' onChange={e => this.handlePassword(e.target.value)} type="text"/>
        <button onClick={this.handleLogin} >LOG IN</button>
      </div>
    );
  }  
}
  
export default App;
