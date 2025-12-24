export default function Sticky()
{
    return(
   <div>
      <h1 className="sticky">I stick to the top</h1>

      <p style={{ height: "1500px" }}>
        Scroll down… keep scrolling… the header stays at the top.
      </p>
    </div>
    )
}