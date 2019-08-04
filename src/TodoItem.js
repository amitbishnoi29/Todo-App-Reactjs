import React, { Component } from 'react'

export default class TodoItem extends Component {

    todoStyle = () =>{
        return {
            backgroundColor:'#f4f4f4',
            padding:'1px',
            borderBottom:'1px dotted blue',
            textDecoration : this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

 

    render() {
        const { id , title} = this.props.todo;
        return (
                <div className='container'  style={this.todoStyle()} >
                <h3  >
                    <input 
                        onChange={this.props.markComplete.bind(this,id)}
                        type="checkbox"
                    />
                    {' '}
                    {title}

                    <button 
                        onClick={this.props.delTodo.bind(this,id)}
                        style={btnStyle}>X
                    </button>
                </h3>
            </div>
            
        )
    }
}

const btnStyle = {
    backgroundColor :'#ff0000',
    padding:'5px',
    borderRadius:'50%',
    float:'right',
    cursor:'pointer',
    
}
