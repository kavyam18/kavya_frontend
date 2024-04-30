import React, { Component } from 'react'

export class ClassChild extends Component {
    constructor(props){
        super(props)
        this.state={
            name:""
        }
        console.log("Child constructor");
    }
    
  render() {
    console.log("Child render");
    return (
      <>
        <h1>{this.props.name}</h1>
    </>
      
    )
  }

  componentDidUpdate(){
    console.log("Child componentDidUpdate");
  }

  componentDidMount(){
    console.log("Child componentDidMount");
  }
}


export default ClassChild