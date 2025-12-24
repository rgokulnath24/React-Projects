import Puppy from "../../../assets/images/puppy.png";
import Heart from "../../../assets/images/heart.jpeg";
import Banner from "../Banner";
import Categories from "../Categories";
export default function Content()
{
  return(
    <>
                <div className="petsy-content-container">
                  <img className="puppy-img" src={Puppy}></img>
                  {/* <div className="puppy-img-border"></div> */}
                <h4 className="gray-heading">We have the Best Products</h4>
                <div className="pet-heading">
                 <span className="pet-heading-title">Your Pet's</span>
                  <span className="pet-heading-place">Favourite Place</span>
                </div>
                <div className="about-content">In consequat, quam id sodales hendrerit, eros mi lacinia risus neque tristique augueproin tempus urna congue. elementum.</div>
                <button className="Explore-now">Explore Now</button>
                </div>
                <Banner/>
                <Categories/>
                </>
  )
}