import React from 'react'

const TodoItem = (props) => {
    return(
        <div className="todo-item">
            <div className="header">
                <h4>{props.tiName}</h4>
                <i class="zmdi zmdi-delete"></i>
            </div>
            <div className="content">
                <p>{props.tiDesc}</p>
            </div>
        </div>
    )
}

export default TodoItem