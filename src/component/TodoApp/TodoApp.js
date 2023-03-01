import React, { Component } from 'react'
import './TodoApp.css'
export default class TodoApp extends Component {
  
  state = {
    todo: "",
    todos: []
  }
  handleChange = (e) => {
    this.setState({
      //If we have multiple input fields instead of todo give [e.target.name]
      todo: e.target.value
    })
  }
  storeItems = (e) => {
    e.preventDefault()
    const { todo } = this.state
    if (todo === "") {
      alert("Enter a Todo")
    }
    else
      this.setState({
        todos: [...this.state.todos, todo],
        todo: ""
      })
  }
  deleteItem = (key) => {
    this.setState({
      todos: this.state.todos.filter((data, index) => index !== key)
    })
  }
  
  render() {
    //destructuring - In input field we need to give value as 'input' only
    const { todo, todos } = this.state
    return (
      <div className='todo-container'>
        <form className='input-section' onSubmit={this.storeItems}>
          <h1>Todo App</h1>
          <input type="text" value={todo} placeholder='Enter a Todo..' onChange={this.handleChange} />
        </form>
        <ul>
          {todos.map((data, index) => (
            <li key={index}>{data} 
            <i className="delete-icon fa-solid fa-trash-can " onClick={() => this.deleteItem(index)}></i></li>
          ))}
        </ul>
        
      </div>
    )
  }
}
