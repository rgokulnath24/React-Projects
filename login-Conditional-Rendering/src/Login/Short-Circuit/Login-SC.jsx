export default function Login({hasmessages})
{
    return(
        <>
        {hasmessages && <p>You had new messages</p>}
        </>
    );
}