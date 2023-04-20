import React from "react";

class Counter extends React.PureComponent {
    state ={
        i: "arun"
    }
    clickHandler = ()=>{
        this.setState({
            i: "damini"
        })
        //this.state.i +=1;
        //console.log(this.i);
    };
    render() {
        console.log("it is rendered");
        return (
            <React.Fragment>
            <div>pressed: {this.state.i} </div>
            <button onClick={this.clickHandler}>click me</button>
            </React.Fragment>

        );
    }
}
export default Counter;