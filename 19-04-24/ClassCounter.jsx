import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props){
        super(props)
        console.log();
    }
    render(){
        return(
            //Fragment tag
            <div>
                <button onClick={()=>this.setstate({count:this.state.count+1})}>Increment</button>
                <button onClick={()=>this.setstate({count:this.state.count-1})}>Decrement</button>
                <button onClick={()=>this.setstate({count:0})}>Reset</button>
            </div>
        )
    
    }
}

export default ClassCounter