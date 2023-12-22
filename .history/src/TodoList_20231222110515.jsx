import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, to}) {
  return (
    <ul className="list">
          {todos.length === 0 && "Empty Liste"}
            {todos.map( todo => {
              return(
                <TodoItem 
                  {...todo} 
                  key={todo.id}

                />
              )  
            })}
              
          </ul>
  )
}
