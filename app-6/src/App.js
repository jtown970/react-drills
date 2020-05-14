import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo'

class App extends Component {
  constructor(){
    super()

    this.state = {
      list: [],
      item: ''
    }

    this.handleAddItem = this.handleAddItem.bind(this)
  }

  handleItem(value){
    this.setState({
      item: value
    })
  }

  handleAddItem(){
    this.setState({
      list: [...this.state.list, this.state.item],
      item: ''
    })
  }

  render(){
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element}/>
    })
    return (
      <div className="App">
        <h1>Todo's</h1>
        <div>
          <input placeholder="Enter a Todo" 
          value={this.state.item}
          onChange={e => this.handleItem(e.target.value)}/>
          <button onClick={this.handleAddItem}>Add</button>
        </div>
        {list}
      </div>
    );
  }  
}
  
export default App;
