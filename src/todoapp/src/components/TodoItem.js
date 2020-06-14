import React from 'react'

function TodoItem(props) {

  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  } 
  // = props.todo.completed ? "#008000" : "#FF0000"

  return(
    <div className="todo-item">
      <input
        type='checkbox' 
        checked={props.todo.completed} 
        onChange={() => props.handleChange(props.todo.id)}
      />
      <p style={props.todo.completed ? completedStyle : null}>{props.todo.text}</p>
    </div>
  )
}

export default TodoItem