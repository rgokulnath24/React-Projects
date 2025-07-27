export default function Login(props)
{
    if(props.loggedin)
    {
       return <h2>Logged In</h2>
    }
    else
    {
        return <h2>Invalid Login</h2>
    }
}