export default function Login(props)
{
  return (
  <>{(props.loggedin)?<h2>User Logged In</h2>:<h2>Invalid User</h2>}</>
  );
}