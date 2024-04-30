import React, { Component } from "react";

class Heading extends Component{bffg
    constructor(props) {
        super(props)
        this.state = {
            name:""
        }
    }
    render() {
       return(
    <div>Heading, {this.props.marks}</div>
          )
           
    }
}

export default Heading;