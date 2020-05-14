import React, { Component } from 'react';
import './App.css';
import Image from './components/Image'

class App extends Component {

  render(){
    return (
      <div className="App">
        <Image url={'https://decider.com/wp-content/uploads/2017/11/jim-halpert.jpg?quality=80&strip=all&w=646&h=431&crop=1'} />
      </div>
    );
  }
  
}
  
export default App;
