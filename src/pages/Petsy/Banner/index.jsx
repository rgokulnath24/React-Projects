import Cards from "../Categories/Cards";
import Modal from "../Modal";
import { useState } from "react";
export default function Banner()
{
    const [modal,showmodal]=useState(false);
    const [data_coll,set_data_coll]=useState([]);   
    const [mode,setMode]=useState(false);
    const [data_display,set_data_display]=useState([]);
    const handleClick=()=>
    {
        showmodal(!modal);
    }
    const handledata=(form)=>
    {
        set_data_coll([...data_coll,form]);
        set_data_display(data_coll);
    }
    const handledelete=(index)=>
        {
        const isconfirmed=window.confirm("Are You Sure Want to Delete");
        if(isconfirmed)
        {
            set_data_coll(prev=>prev.filter((_,i)=>i!=index));
        }
    }
    const handle_edit=(index)=>
    {
        showmodal(!modal);
        setMode(!mode);
        // set_data_display(prev=>prev.filter((_,i)=>i===index));
        console.log(index);
        // console.log(data_display);
    }
    return(
        <>
        <div className="banner-container">
            <div className="banner-container-content">
                <span className="banner-container-offer">Receive 20% OFF your first order of our self-made pet food!</span>
                <span className="banner-container-demo">In consequat, quam id sodales hendrerit, eros mi lacinia risus neque.</span>
            </div>
                <button className="banner-container-button" onClick={handleClick}>Woof Woof</button>
        </div>
        {modal?<Modal onClose={handleClick} onsenddata={handledata} mode={mode} data_res={data_display}/>:""} 
        <Cards data={data_coll} data_filter={handledelete} data_edit={handle_edit}/>
        </>
    )
}