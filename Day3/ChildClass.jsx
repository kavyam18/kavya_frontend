import React from 'react'
import GrandChild from './GrandChild'

// const ChildClass = (props) => {
//     return(
//         <div>
//             <h1>{JSON.stringify(props)}</h1>
//         </div>
//     )
// }

const ChildClass = () => {
    return(
        <div>
            <GrandChild/>
        </div>
    )
}
export default ChildClass