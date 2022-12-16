import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Increment,Decrement,Loged_in} from './action'

function App() {

  const counter_reducer=useSelector(state=>state.Counter);
  const loged_in_reducer=useSelector(state=>state.Islogedin);

  const dispatch=useDispatch();

  let button_status='';
  if(loged_in_reducer===false)
  {
    button_status='Log-in'
  }
  else{
    button_status='Log-out'
  }
  return (
    <div>
    <h2>Conter : {counter_reducer}</h2>  
    <button onClick={()=>dispatch(Decrement())}>Decrement</button>
    <button onClick={()=>dispatch(Increment())}>Incement</button>
    {loged_in_reducer?<p>This is Valuable Information</p>:<p>Please login</p>}
    <button onClick={()=>dispatch(Loged_in())}>{button_status}</button>
    </div>
  )
}

export default App
