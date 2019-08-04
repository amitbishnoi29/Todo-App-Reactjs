import React, { Component } from 'react'
import { BrowserRouter as Router ,Route} from 'react-router-dom'
import Todos from './Todos'
import axios from 'axios'
import './App.css'
import Header from './Header'
import AddTodo from './AddTodo';
import uuidv4 from 'uuidv4'
import About from './About'


 class App extends Component {

  state = {
    todos:[]
  }


  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos:res.data})
    )
    }
  

  markComplete = (id) => {
    this.setState( { todos : this.state.todos.map((todo)=> {
      if (todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo
    }) } )
    //localStorage.setItem('todos',JSON.stringify(this.state.todos));
  }

  delTodo = (id) => {

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({
      todos : this.state.todos.filter((todo)=> todo.id!==id)
    }))
    
    //localStorage.setItem('todos',JSON.stringify(this.state.todos));
  }

  addTodo = (title) => {

    axios.post('https://jsonplaceholder.typicode.com/todos',{
      id:uuidv4(),
      title,
      completed:false
    })
    .then(res=>this.setState (
      {                                   // state is an object
        todos: [...this.state.todos , res.data]
      }
    ) )
   
   //console.log(this.state.todos);
    
    
    
    
    //localStorage.setItem('todos',JSON.stringify(this.state.todos));

    //console.log(this.state.todos);
    
  }
 


  render(){

    return (
      <Router>
        <div className='App.css'>
        <Header /> <br/>
        <Route exact path ='/' render ={ props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo} /> <br/>
            <Todos 
              todos ={this.state.todos} 
              markComplete={this.markComplete}
              delTodo={this.delTodo}
            >
            </Todos>
          </React.Fragment>  
          
        )} 

        />
        <Route exact path='/about' component ={About} />  
        </div>
      </Router>
      
    )
  }
}


export default App;