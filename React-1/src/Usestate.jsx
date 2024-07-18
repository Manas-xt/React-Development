import { useEffect, useState } from 'react';
import './App.css'

const Usestate = () => {
  const [count,setcount] = useState(0)
  const [counttwo,setcounttwo] = useState(0)
//   console.log(count,counttwo);

  useEffect(() =>{
    alert("counter is increased by 1")
  },[count]);
  const handleClick = () => {
    setcount(count+1)
  }
  const handleClicz = () => {
    setcounttwo(counttwo+1)
  }
  return (
    <div className='box-container'>
        <h1>Count:{count}</h1>
      <button onClick={handleClick}>increment</button>
      <h1>Count:{counttwo}</h1>
      <button onClick={handleClicz}>increment</button>
      <p>Some text to show when button is clicked</p>
    </div>
  );
}
export default Usestate;