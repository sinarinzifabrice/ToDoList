import React from 'react'

export default function TodoItem() {
  return (
        <li key={todo.id}>
                  <label>
                    <input type="checkbox" 
                  //   onChange={e => toggleTodo(todo.is, e.target.checked)}
                    checked={todos.completed}/>
                    {todo.title}
                    <button 
                          // onClick={()=> deleteTodo(todo.id)} 
                          className="btn btn-danger">
                              Delete
                          </button>
                  </label>
        </li>
    )
}
