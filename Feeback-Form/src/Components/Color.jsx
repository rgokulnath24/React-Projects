import { useRef } from "react"

export default function Color()
{
    const container=useRef();
    return(
        <>
        <h2 ref={container}>Hello this is Developer From React</h2>
        <button onClick={()=>container.current.style.color="red"}>click</button>
        </>
    )
}