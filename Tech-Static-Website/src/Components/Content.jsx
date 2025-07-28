import React from "react";

export default function Content(props)
{
    return(
    <div id="content">
    <h1>{props.data}</h1>
    <p id="content-full">{props.fulldata}</p>
    </div>
    );
}