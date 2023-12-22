import React from 'react'

export default function TodoList({todos}) {
  return (
    <ul className="list">
          {todos.length === 0 && "Empty Liste"}
            {todos.map( todo => {
              return(
                <todo
              )
                
            })}
              
          </ul>
  )
}
