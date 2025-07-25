import {useState} from "react";

export default function StateExample2()
{
    const [color,updatecolor]=useState("red");
    const clicked=(a)=>
    {
        updatecolor(a);
    }
    return <>
    <h1 style={{color}}>Color Changer</h1>
    <button type="button" onClick={()=>clicked("Green")}>Green</button>
    <button type="button" onClick={()=>clicked("Blue")}>Blue</button>
    </>
}