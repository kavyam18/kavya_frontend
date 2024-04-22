import React, { Component } from "react";
import ClassCounter from "./ClassCounter";

class CounterParent extends Component{
    constructor(props){
        super(props)
        this.state = {count:this.props.count}
    }
    handler () {
        this.setState({count: this.state.count + 1})
    }
    
    render (){
        return(
            <div>
            <h1>{this.state.count}</h1>
            <ClassCounter count={this.state.count} handler={this.handler}/>

            </div>
        )
    }
}
export default CounterParent