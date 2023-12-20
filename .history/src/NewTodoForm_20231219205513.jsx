import {useState} from 'react'


const [newItem, setnewItem] = useState("");


export function NewTodoForm() {

  

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New item</label>
            <input type="text" 
            value={newItem} 
            onChange={e => setnewItem(e.target.value)} 
            id="item"/>
        </div>
        <button className="btn">Add</button>
    </form>
  )
}
