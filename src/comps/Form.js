import React, { useEffect } from 'react'
import {v4 as uuid} from 'uuid';

const Form = ({input,setInput,todo,setTodo,todoUpdate,setTodoupdate}) => {
  const updatedata=(title,id)=>{
      const edited=todo.map((tod)=>(tod.id===id?{title,id}:todo))
      setTodo(edited)
      setTodoupdate('');
  }
  useEffect(()=>(todoUpdate?setInput(todoUpdate.title):setInput({fn:'', ln:'', email:''})),[todoUpdate,setInput]);
   const changeInput=(e)=>{ setInput({...input,[e.target.name]:e.target.value})}
   const submitData=(e)=>{
    e.preventDefault();
    if(!todoUpdate)
    {
     setTodo([...todo,{id:uuid(),title:input}])
     setInput({fn:'', ln:'', email:''})
    }else{
        updatedata(input,todoUpdate.id);
    }
   }
    return (
    <div>
      <form onSubmit={submitData}>
        <input type="text" name='fn' value={input.fn} onChange={changeInput} required></input>
        <input type="text" name='ln' value={input.ln} onChange={changeInput} required></input>
        <input type="email" name='email' value={input.email} onChange={changeInput} required></input>

        <button type="submit">OK</button>
      </form>
    </div>
  )
}

export default Form