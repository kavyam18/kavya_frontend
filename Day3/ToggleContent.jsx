import React, { useState } from 'react'

const ToggleContent = () => {
    const[toggle, setToggle] = useState(false)
    const toggleHandler = () => {
        setToggle(!toggle);
    }
  return (
    <div>
        <button onClick={toggleHandler}>
            {toggle ? ('Hide Content') : ('Show Content')}
            </button> 
            {toggle && <p>Dynamic Rendering Data</p>}
            </div>
  )
}

export default ToggleContent