import React from "react";
const styleg={
    color: 'yellow',
    backgroundColor : 'blue',

}
const Greeting = (props)=>{
    return (
        <>
        <div style={styleg}>hello {props.name}</div>
        <div>bye {props.name}</div>
        </>
    )
}
export default Greeting;