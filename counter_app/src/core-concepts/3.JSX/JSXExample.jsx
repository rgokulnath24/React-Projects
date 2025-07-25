import "../../app.css";
export default function JSX_example()
{
    // const name="Gokul";
    //embedded Expressions.
    function naming()
    {
        return "Gokulnath";
    }
    return <><h1 className="bg-color">Hello<span style={{backgroundColor:"blue",border:"10px solid green"}}> {naming()} from JSX Example</span></h1></>
}