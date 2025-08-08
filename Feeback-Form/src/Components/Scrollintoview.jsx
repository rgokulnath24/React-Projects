import { useRef } from "react";

export default function Scrollintoview()
{
    const box_scroll=useRef();
    const scroll=()=>
    {
        box_scroll.current.scrollIntoView({behaviour:"smooth"});
    }
    return(
        <>
        <button onClick={scroll}
        >Click</button>
        <div style={{ height: "900px" }} />
        <div>
            <h2 ref={box_scroll} style={{height:"400px"}}>Hai hello ALL</h2>
        </div>
        </>
    )
}