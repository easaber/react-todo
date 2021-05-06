import React, { Component } from 'react'
// import TodoItem from './TodoItem'
import TodoList from './TodoList'

class Todo extends Component {

    state = {
        TodoName : "Projects",
        TodoLists : [
            {tlId: "TL01",tlName: "To do"},
            {tlId: "TL02",tlName: "In Progress"},
            {tlId: "TL03",tlName: "Completed"}
        ],
        TodoItems : []
    };

    

    render() {

        this.todoLists = (
            <div>
                {this.state.TodoLists.map((tl,index) => {
                    return (
                        <TodoList 
                            key={tl.tlId}
                            tlName={tl.tlName}>
                            
                        </TodoList>
                    );
                })}
            </div>
        );

        return (
            <div className="todo">
                <h2>{this.state.TodoName}</h2>
    
                <div className="todo-body">
                    {this.todoLists}
                </div>
            </div>
        );
    }
}

export default Todo