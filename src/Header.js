import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header>
                <h1>Todo List</h1>
                <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
                
            </header> 
        </div>
    )
}
export default Header;