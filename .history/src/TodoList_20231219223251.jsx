import React from 'react'

export default function TodoList({}) {
  return (
    <ul className="list">
          {todos.length === 0 && "Empty Liste"}
            {todos.map( todo => {
              return(<li key={todo.id}>
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
              </li>)
                
            })}
              
          </ul>
  )
}
