import React, { useState } from 'react'
import ChildClass from './ChildClass'

export const  DataContext = React.createContext();
 const ParentClass = () => {
    const [data,setData] = useState(0)
        return (
      <div>
        <DataContext.Provider value={[data,setData]}>
            <ChildClass/>
            </DataContext.Provider>
      </div>
    )
  }


export default ParentClass