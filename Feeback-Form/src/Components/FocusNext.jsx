import { useRef } from "react";

export default function FocusNext()
{
    const inputbox=useRef([]);
    const handleinput=(e,i)=>
    {
        const input_value=e.target.value;
        if((input_value.length===1)&&(i<3))
        {
            inputbox.current[i+1].focus();
        }
    }
    return(
        <>
        {Array(4).fill("").
        map((_,i)=>(
            <input maxLength={1} ref={((el)=>{inputbox.current[i]=el})}
            onChange={(e)=>handleinput(e,i)}>
            </input>
        ))
        }
        </>
    )
}