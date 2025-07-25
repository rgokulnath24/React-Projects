import {useState} from 'react';
function StateExample()
{   
    const [count,setcount]=useState(2);
    console.log('count incremented');
    const handleClick=()=>
    {
      setcount(count*2);
    }
    return <>
    <h1>State Example</h1>
    <h3>Counter: {count}</h3>
    <button onClick={handleClick} className="bg-color">Increment</button>
    </>
}
export default StateExample;