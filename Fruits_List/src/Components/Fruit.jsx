import React,{Component, useState} from "react";
import Swal from 'sweetalert2';

export default function Fruit()
{
const [fruit,setfruit]=useState(()=>
{
    const stored=localStorage.getItem("fruit");
    return stored?JSON.parse(stored):[];
});
const [name,setname]=useState("");
const [category,setcategory]=useState("");
const [search,setsearch]=useState("");


const handle_add_click=()=>
{
    if(name&&category)
    {
    const newfruit={id:Date.now(),name,category};
    const updated_fruit=[...fruit,newfruit];
    setfruit(updated_fruit);
    localStorage.setItem("fruit",JSON.stringify(updated_fruit));
    setname("");
    setcategory("");
    }
};
const handle_delete=(id)=>
{
   Swal.fire({
    title: 'Are you sure?',
    text: 'Do you want to delete this fruit?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!'
   }).then((result)=>{
    if(result.isConfirmed){
        const fruit_for_deletion=fruit.filter((fruits)=> fruits.id!==id);
        setfruit(fruit_for_deletion);
        localStorage.setItem('fruit',JSON.stringify(fruit_for_deletion));
         Swal.fire('Deleted!', 'The fruit has been deleted.', 'success');
    }})
}
const filteredfruits = fruit.filter((f) =>
  f.category?.toLowerCase().includes(search.toLowerCase())
);

    
return(
<div className="container mt-5">
     <h2 className="text-center mb-5">Fruits App</h2>
    <div className="card p-4 shadow-sm mb-4">
        <div className="row g-4">
            <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Fruit Name"
            value={name}
            onChange={(e)=>setname(e.target.value)}></input>
            </div>
            <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Category Name"
            value={category}
            onChange={(e)=>setcategory(e.target.value)}></input>
            </div>
            <div className="col-md-4 d-grid">
            <button type="button" className="btn btn-success"
            onClick={handle_add_click}>+Add</button>
            </div>
        </div>
    </div>

    <div className="mb-3">
        <input type="text" className="form-control" placeholder="filter by category" 
        value={search} onChange={(e)=>setsearch(e.target.value)}></input>
    </div>
    <table className="table table-bordered table-hover">
     <thead className="table-dark">
      <tr>
        <td>S.No</td>
        <td>Fruit</td>
        <td>Category</td>
        <td>Action</td>
      </tr>
     </thead>
     <tbody>
     {filteredfruits.length===0?
     (<tr>
        <td colSpan="4"><center>No Fruits Found</center></td>
     </tr>):
     filteredfruits.map((k,index)=>
     (
         <tr key={k.id}>
            <td>{index+1}</td>
            <td>{k.name}</td>
            <td>{k.category}</td>
            <td>
                <button type="button" className="btn btn-danger text-light"
                onClick={()=>handle_delete(k.id)}>Delete</button>
            </td>
         </tr>
     ))}
     </tbody>
    </table>
</div>
)
}