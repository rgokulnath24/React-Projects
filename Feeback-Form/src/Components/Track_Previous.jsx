import { useEffect, useRef, useState } from "react";

export default function Track_Previous()
{
    const [value,setvalue]=useState(0);
    const ref_value=useRef();

    useEffect(()=>
    {
       ref_value.current=value;
       console.log("running",value);
    },[value]);
    return(
        <>
        <h2>Current Value:{value}</h2>
        <h2>Previous Value:{ref_value.current}</h2>
        <button onClick={()=>setvalue(value+1)}>click</button>
        </>
    )
}