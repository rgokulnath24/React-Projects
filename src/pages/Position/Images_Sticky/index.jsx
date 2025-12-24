import Food from "../../../assets/images/food.jpg";
export default function Images_Sticky()
{
   return(
   <div className="veg-container">
   <h1 className="hero-content-name">Veg Thali</h1>
   <img className="VegThali" src={Food} alt="food"></img> 
   </div>)
}