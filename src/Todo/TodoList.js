import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
    return(
        <div className="todo-list">
            <h3>{props.tlName}</h3>
            
            <div className="todo-items">
                {props.children}
            </div>
            
            
        </div>
    )
}

export default TodoList