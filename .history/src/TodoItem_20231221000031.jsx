import React from 'react'

export default function TodoItem({coompleted, id, title}) {
  return (
        <li>
            <label>
            <input type="checkbox" 
            //   onChange={e => toggleTodo(todo.is, e.target.checked)}
            checked={completed}/>
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
