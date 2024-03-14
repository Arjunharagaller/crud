import React from 'react'

const Todos = ({todo,setTodo,setTodoupdate}) => {
    const deleteDate=({id})=>{
    setTodo(todo.filter((tod)=>tod.id!==id))
    }
    const editdata=({id})=>{
        const edited=todo.find((tod)=>tod.id===id)
         setTodoupdate(edited);
    }
  return (
    <div>
        {todo.map((tod)=>{return(<li key={tod.id}>
            <input type="text" value={tod.title.fn} readOnly disabled></input>
            <input type="text" value={tod.title.ln} readOnly disabled></input>
            <input type="email" value={tod.title.email} readOnly disabled></input>

            <button type='button' onClick={()=>editdata(tod)}>edit</button>
            <button type='button' onClick={()=>deleteDate(tod)}>delete</button>
        </li>)})}
    </div>
  )
}

export default Todos