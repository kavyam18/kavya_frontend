import React, { Component } from 'react'
import ClassChild from './ClassChild';

export class ClassParent extends Component {
    constructor(){
        super()
        this.state={
            name:"john"
        }
        console.log("Parent constructor");
    }
    
  render() {
    console.log("Parent render");
    return (
      <>
        <ClassChild name={this.state.name}/>
        <button onClick={
            ()=> {
            this.setState({name:"Oliver"})
            }
        }>Change</button>
        </>
      
    )
  }

  componentDidUpdate(){
    console.log("Parent componentDidUpdate");
  }

  componentDidMount(){
    console.log("Parent componentDidMount");
  }
}

export default ClassParent