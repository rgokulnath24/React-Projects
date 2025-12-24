export default function Cards({data,data_filter,data_edit})
{
    return(
            <div className="card-container">
                  {data.map((val,index)=>(
                    <div className="card" key={index}>
                        <h2>{val.image_title}</h2>
                        {val.image &&
                        <img src={URL.createObjectURL(val.image)} alt="preview" width="200"/>
                        }
                        <h4>{val.image_description}</h4>
                        <div className="action-buttons">
                        <button type="button" className="edit-button" onClick={()=>data_edit(index)}>Edit</button>
                        <button type="button" className="delete-button" onClick={()=>data_filter(index)}>Delete</button>
                        </div>
                    </div>
                  ))}
            </div>
    )
}