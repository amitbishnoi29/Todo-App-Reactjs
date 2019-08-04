import React, { Component } from 'react'
import TodoItem from './TodoItem'



 class Todos extends Component {
    render() {
        const {todos} = this.props ;   
        
        return  todos.map((todo)=>
        <TodoItem key={todo.id} todo={todo}
           markComplete={this.props.markComplete}
           delTodo ={this.props.delTodo}
         />
       ) ;
        
    }
}

export default Todos;