import React,{Component} from "react";
// ComponentDidMount
// ComponentDidUpdate
// ComponentWillUnMount
export default class Digital_Clock extends Component
{
    constructor()
    {
        super();
        this.state=
        {
            time:new Date().toLocaleTimeString()
        }
    }

    componentDidMount()
    {
        console.log("component Did Mount");
        this.timerID=setInterval(()=>this.updatetime(),1000);
    }
    componentWillUnmount()
    {
         console.log("component Will Un Mount");
         clearInterval(this.timerID);
    }
    updatetime()
    {
        this.setState(
        {
            time:new Date().toLocaleTimeString()
        })
    }

    render()
    {
        return(
            <>
        <div className="clock-container">
            <h1>Digital 🕒</h1>
            <h2>{this.state.time}</h2>
        </div>
            </>
        )
    }

}