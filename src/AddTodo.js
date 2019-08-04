import React, { Component } from 'react'

class AddTodo extends Component {

    state = {
        title:''
    }

    onchange = (e) => this.setState({ [e.target.name]:e.target.value})

    onsubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onsubmit}>
                    <input
                        style={{width:'60%'}} 
                        type="text" 
                        name='title' 
                        placeholder='Add Todo..'
                        onChange={this.onchange}
                        value={this.state.title} 
    
                    /> {' '}
                    <input 
                        type="submit" 
                        value="Add Todo"
                    />
                </form>
            </div>
        )
    }
}

export default AddTodo;