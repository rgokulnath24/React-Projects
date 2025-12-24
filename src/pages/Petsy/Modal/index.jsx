import { useRef, useState } from "react";

export default function Modal({onClose,onsenddata,mode}) 
{
    const formdata={
        image_title:"",
        image:null,
        image_description:""
    };
    const inputref=useRef();
    const [form,setForm]=useState(formdata);
    const handlechange=(event)=>
    {
        const {name,value,files}=event.target;
        setForm({...form,[name]:files?files[0]:value});
    }
    const handlesubmit=(event)=>
    {
        event.preventDefault();
        onsenddata(form);
        if(inputref.current)
        {
            inputref.current.value="";  
        }
        setForm(formdata);
        onClose();
    }
    return(
    <>
    {/* {data_res.map((val,index)=>( */}
    <form className="modal-content" onSubmit={handlesubmit}>
    <h3><center>{mode?"Edit the Form":"Fill the Form"}</center></h3>
    <div className="form-group">
        <label>Image Title</label>
        <input type="text"  onChange={handlechange} name="image_title"
        value={form.image_title} placeholder="Image Title"/>
    </div>
    <div className="form-group">
        <label>Image</label>
        <input className="form-group-image" onChange={handlechange}
        ref={inputref} name="image"
        type="file"></input>
    </div>
    <div className="form-group">
        <label>Image Description</label>
        <textarea 
        value={form.image_description
        } onChange={handlechange}
        name="image_description"
        rows={3} cols={20}/>
    </div>
    <div className="form-group-buttons">
        <button type="button" className="cancel" onClick={onClose}
        value="cancel">cancel</button>
        <button type="submit" className="submit"
         value="submit">{mode?"Update":"Submit"}</button>
    </div>
    </form>
    {/* ))} */}
    </>
    )
}