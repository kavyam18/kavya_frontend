import React, { Component } from 'react'

export class Child extends Component {
  render() {
    console.log("Child Render");
    return (
      <div>Child</div>
    )
  }
}

export default Child