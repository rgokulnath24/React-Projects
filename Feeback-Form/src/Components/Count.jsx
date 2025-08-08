import { useRef } from "react"

export default function Count()
{
    let count=useRef(0);

    return(
        <>
        <h1>{count.current}</h1>
        <button onClick={()=>{count.current++;console.log(count);}}>click</button>
        </>
    );
}