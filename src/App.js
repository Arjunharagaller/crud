import { useEffect, useState } from 'react';
import Form from './comps/Form';
import Todos from './comps/Todos';
function App() {
   const init=JSON.parse(localStorage.getItem('todo'))||[];
  const [input,setInput]=useState({fn:'',ln:'',email:''});
  const [todo,setTodo]=useState(init);
  const [todoUpdate,setTodoupdate]=useState();
  useEffect(()=>{localStorage.setItem('todo',JSON.stringify(todo))},[todo])
  return (
    <div>
        <Form input={input} setInput={setInput} todo={todo} setTodo={setTodo}
         todoUpdate={todoUpdate} setTodoupdate={setTodoupdate}></Form>
        <Todos  todo={todo} setTodo={setTodo}  setTodoupdate={setTodoupdate}></Todos>
    </div>
  );
}

export default App;
