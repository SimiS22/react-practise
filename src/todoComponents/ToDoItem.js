import React from 'react'
import './ToDoItem.css'

const ToDoItem = () => {
    return (
        <div className="todoList">
            <div className="todoItem"><input type="checkbox" name="ToDo1" /><label>Todo Item 1</label></div>
            <div className="todoItem"><input type="checkbox" name="ToDo2" /><label>Todo Item 2</label></div>
            <div className="todoItem"><input type="checkbox" name="ToDo3" /><label>Todo Item 3</label></div>
        </div>
    )
}

export default ToDoItem