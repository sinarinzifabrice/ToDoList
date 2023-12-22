import React from 'react'

export default function TodoItem({coompleted, id, title}) {
  return (
        <li>
            <label>
            <input type="checkbox" 
            //   onChange={e => toggleTodo(is, e.target.checked)}
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
