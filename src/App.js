import React, { Component } from 'react'
import Todos from './Todos'
import './App.css'
import Header from './Header'
import AddTodo from './AddTodo';
import uuidv4 from 'uuidv4'


 class App extends Component {

  state = {
    todos:[]
  }


  componentDidMount(){
    if (this.state.todos.length>0) {
      let todos= localStorage.getItem('todos');
      this.setState({todos:JSON.parse(todos)})
    }
  }

  markComplete = (id) => {
    this.setState( { todos : this.state.todos.map((todo)=>{
      if (todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo
    }) } )
    localStorage.setItem('todos',JSON.stringify(this.state.todos));
  }

  delTodo = (id) => {
    this.setState({
      todos : this.state.todos.filter((todo)=> todo.id!==id)
    }) 
    localStorage.setItem('todos',JSON.stringify(this.state.todos));
  }

  addTodo = (title) => {
    const newTodo = {
      id :uuidv4(),
      title,
      completed : false
    }
   console.log(this.state.todos);
    
    this.setState (
      {                                   // state is an object
        todos: [...this.state.todos , newTodo]
      }
    );
    
    
    localStorage.setItem('todos',JSON.stringify(this.state.todos));

    console.log(this.state.todos);
    
  }
 


  render() {

    return (
      <div className='App.css'>
      <Header />
      <AddTodo addTodo={this.addTodo} />
        <Todos 
          todos ={this.state.todos} 
          markComplete={this.markComplete}
          delTodo={this.delTodo}
          >
        </Todos>
      </div>
    )
  }
}


export default App;