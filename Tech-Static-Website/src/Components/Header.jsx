import React from "react";
export default function Header(props)
{
    return(
    <div id="header">
    <h1 id="heading">{props.data}</h1>
    </div>
    );
}