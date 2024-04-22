import React, { Component } from 'react'
import Child from './Child';

export class Parent extends Component {
    constructor(){
        super()
        this.state ={count:0}
    }
  render() {
    console.log("Parent Render");
    return (
      <div><Child/>
      <h1>{this.state.count}</h1>
      <button onClick={() => this.setState({count:this.state.count+1})}>INCREMENT</button>
      <button onClick={() => this.setState({count:0})}>Reset</button>
      </div>
    )
  }
}

export default Parent