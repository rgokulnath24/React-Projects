import { useState } from "react";

export default function Counter_State()
{
    const [start,update]=useState(1);

    const increment=(a)=>
    {
        console.log("Running increment with", a);
        update(start+a);
    }
    const decrement=(a)=>
    {
        if(start-a>=0)
        {
          update(start-a); 
          console.log("Running Decrement with", a);
        }
        else
        {
          console.log("Value Cannot be Less than 1");
        }
    }
    return <>
    <h1 className="num_header">Number : {start}</h1>
    <div class="button-container">
    <button className="incr" type="button" onClick={()=>increment(1)}>+</button>&nbsp;&nbsp;
    <button className="decr" type="button" onClick={()=> decrement(1)}>-</button>
    </div>
    </>
}