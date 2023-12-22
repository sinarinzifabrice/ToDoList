import React from 'react'

export default function TodoItem({completed, id, title}) {
  return (
        <li>
            <label>
            <input type="checkbox" 
            //   onChange={e => toggleTodo(id, e.target.checked)}
            checked={completed}/>
            {title}
            <button 
                    // onClick={()=> deleteTodo(id)} 
                    className="btn btn-danger">
                        Delete
                    </button>
            </label>
        </li>
    )
}
