import Heart from "../../../assets/images/heart.jpeg"
export default function Header()
{
    const petsy_header_links=
    ["Home","Products","About Us","Blog","Contact"];
     const petsy_header_side_links=
    ["Phone","Profile","Shop Us"];
    return(
        <div className="petsy-header-content">
            <div className="petsy-header-logo-links">
                <img className="petsy-header-logo" src={Heart}/>
                <h1>Petsy</h1>
            </div>
           
            <ul className="petsy-header-links">
                {petsy_header_links.map((val,index)=>
                (
                <li key={index}><a href="#">{val}</a></li>
                ))}
            </ul>
            <ul className="petsy-header-side-links">
                {petsy_header_side_links.map((val,index)=>
                (
                <li key={index}><a href="#">{val}</a></li>
                ))}
            </ul>
        </div>
    )
}